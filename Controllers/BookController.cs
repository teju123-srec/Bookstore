using bookstore.Context;
using bookstore.Dto;
using bookstore.Models;
using bookstore.Repositories.Books;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace bookstore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {

        private readonly IBookrepo _bookrepo;

        public BookController(IBookrepo bookrepo)
        {
            _bookrepo = bookrepo;
        }

          [HttpGet("/GetAllBooks")]
        public async Task<ActionResult<List<books>>> GetAllBooks()
        {
            try
            {
                var response = await _bookrepo.GetAllBooks();
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Something went wrong {ex.Message}");
                return NotFound();
            }
        }

        [HttpGet("/GetBooks")]
        public async Task<ActionResult<books>> GetBooks([FromQuery] string Id)
        {
            try
            {
                var response = await _bookrepo.GetBook(Id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Something went wrong {ex.Message}");
                return NotFound();
            }
        }

        [HttpGet("/GetTypeOfBooks")]
        public async Task<ActionResult<List<books>>> GetTypeOfBooks(booktype type)
        {
            try
            {
                var response = await _bookrepo.GetTypeOfBooks(type);
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Something went wrong {ex.Message}");
                return NotFound();
            }
        }
        [HttpGet("/SearchBooks")]
        public async Task<ActionResult<List<books>>> SearchBooks(string title)
        {
            try
            {
                var response = await _bookrepo.SearchBook(title);
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