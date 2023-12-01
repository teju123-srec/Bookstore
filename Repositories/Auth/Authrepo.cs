using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookstore.Context;
using bookstore.Controllers;
using bookstore.Dto;
using bookstore.Helpers;
using bookstore.Models;
using Microsoft.EntityFrameworkCore;

namespace bookstore.Repositories.Auth
{
    public class Authrepo:IAuthrepo
    {
          private readonly AppDbContext authcontext;
          private readonly IJwtUtils _jwtUtils;

            public Authrepo(AppDbContext appDbContext, IJwtUtils JwtUtils)
        {
               authcontext=appDbContext;
             _jwtUtils = JwtUtils;
        }

        public async Task<string> Login(Authenticaterequest Request)
        {
            if(Request==null)
            {
            throw new AuthenticateException ("BadRequest");
            }
            
            var user=await authcontext.Users.SingleOrDefaultAsync(x=> x.Username == Request.Username && x.Password==Request.Password);
            if(user==null)
           {
            throw new AuthenticateException("User not found");
           }

            var Token = _jwtUtils.GenerateToken(user);
            return Token;
        }

    }

}