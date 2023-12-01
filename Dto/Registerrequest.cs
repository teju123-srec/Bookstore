using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace bookstore.Dto
{
    public class Registerrequest
    {
         [Required]
        public string? Username { get; set; }
        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string? Email { get; set; }
        [Required]
        public string UserRole { get; set; } = String.Empty;
        [Required]
        
        public string? Password { get; set; }
       
       [Required]
       public long MobileNumber{get;set;}
    }
}