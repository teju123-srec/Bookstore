using System.ComponentModel.DataAnnotations;
using bookstore.Models;

namespace bookstore.Dto
{
    public class JwtData
    {
        public Guid Id { get; set; }
        public Role Role { get; set; }
    }
}