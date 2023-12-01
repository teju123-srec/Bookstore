using bookstore.Context;
using bookstore.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace bookstore.Repositories.Admin
{
    public class AdminRepo : IAdminRepo
    {
        private readonly AppDbContext _context;
        public AdminRepo(AppDbContext appDbContext)
        {
            _context = appDbContext;
        }

        //add new book
        public async Task<bool> AddBook(books book)
        {
            Guid Id= Guid.NewGuid();
            book.Id = Id.ToString();
            await _context.Bookdetails.AddAsync(book);
            await _context.SaveChangesAsync();
            return true;
        }
        //update a book
        public async Task<bool> UpdateBook(books book)
        {
            _context.Bookdetails.Update(book);
            await _context.SaveChangesAsync();
            return true;
        }
        //delete a book
        public async Task<bool> DeleteBook(string id)
        {
            books book = await _context.Bookdetails.SingleOrDefaultAsync(book => book.Id == id);
            if (book != null)
            {
                // Delete the record asynchronously
                _context.Bookdetails.Remove(book);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

    }
}
