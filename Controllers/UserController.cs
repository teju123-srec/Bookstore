using bookstore.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using bookstore.Models;
using bookstore.Models.Tokenapi;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using bookstore.Dto;
using bookstore.Helpers;
using bookstore.Repositories.Auth;

namespace bookstore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _authcontext;

         private IAuthrepo _authService;

        public UserController (AppDbContext appDbContext,IAuthrepo userService)
        {
            _authcontext=appDbContext;
             _authService = userService;
        }

        [HttpPost("login")]

        public async Task<IActionResult> Login( Authenticaterequest Request)
        {
            var Token = await _authService.Login(Request);
             HttpContext.Response.Headers.Add("Authorization", Token);
             return Ok(Token);    
            
        }

        [HttpPost("register")]

        public async Task<IActionResult>RegisterUser([FromBody] Registerrequest Request)
        {
           
            if(Request==null)
            return BadRequest();
                
           if (!await _authcontext.Users.AnyAsync(x => x.Username == Request.Username))
         {
            
                
                    User? user = new();
                    user.Username=Request.Username;
                    user.Password=Request.Password;
                    user.Email=Request.Email;
                    user.MobileNumber=Request.MobileNumber;
                    if (Request.UserRole == Role.Admin.ToString())
                    {
                        user.UserRole=Role.Admin;
                    }
                    else
                    {
                        user.UserRole=Role.Customer;
                    }
                    _authcontext.Users.Add(user);
                    await _authcontext.SaveChangesAsync();
            return Ok(new
            {
               Message="User Registered!"
            });
 }
       else
       {
       throw new BadHttpRequestException("Username already registered");
      }
        }
    }
}