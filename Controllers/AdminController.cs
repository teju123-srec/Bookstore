using bookstore.Models;
using bookstore.Repositories.Books;
using bookstore.Repositories.Admin;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bookstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepo _adminrepo;

        public AdminController(IAdminRepo adminrepo)
        {
            _adminrepo = adminrepo;
        }

        [HttpPost("/AddBook")]
        public async Task<ActionResult<bool>> AddBook([FromBody] books book)
        {
            try
            {
                var response = await _adminrepo.AddBook(book);
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Something went wrong {ex.Message}");
                return NotFound();
            }
        }
        [HttpPut("/UpdateBook")]
        public async Task<ActionResult<bool>> UpdateBook([FromBody] books book)
        {
            try
            {
                var response = await _adminrepo.UpdateBook(book);
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Something went wrong {ex.Message}");
                return NotFound();
            }
        }
        [HttpDelete("/DeleteBook")]
        public async Task<ActionResult<bool>> DeleteBook([FromQuery] string id)
        {
            try
            {
                var response = await _adminrepo.DeleteBook(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Something went wrong {ex.Message}");
                return NotFound();
            }
        }
    }
}
