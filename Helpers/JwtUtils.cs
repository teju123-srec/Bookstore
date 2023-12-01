using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using bookstore.Dto;
using bookstore.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace bookstore.Helpers
{
    public interface IJwtUtils{
        public string GenerateToken(User user);
         public JwtData? ValidateToken(string token);
    }
    
    public class JwtUtils:IJwtUtils
    {
        private readonly AppSettings _appSettings;
        private readonly IConfiguration _config;
     public JwtUtils(IOptions<AppSettings> appSettings, IConfiguration config)
        {
            _appSettings = appSettings.Value;
            _config = config;
        }

        public string GenerateToken(User user)
        {
           List<Claim> claims = new List<Claim>
            {
                
                new Claim("role", user.UserRole.ToString()),
                new Claim("username", user.Username),
                new Claim("id", user.Id.ToString())

            };
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Secret").Value));



            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);



            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: cred
                );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

         public JwtData? ValidateToken(string token)
        {
            if (token == null)
                return null;
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var PayLoad = new JwtData();
                PayLoad.Id = new Guid(jwtToken.Claims.First(claim => claim.Type == "id").Value);
                PayLoad.Role = (Role)Enum.Parse(typeof(Role), jwtToken.Claims.First(claim => claim.Type == "role").Value);
                // return user id from JWT token if validation successful
                return PayLoad;
            }
            catch
            {
                // return null if validation fails
                return null;
            }

        }

    }


}