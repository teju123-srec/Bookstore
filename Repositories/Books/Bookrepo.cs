using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookstore.Context;
using bookstore.Controllers;
using bookstore.Dto;
using bookstore.Models;
using bookstore.Repositories.Admin;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace bookstore.Repositories.Books
{
    public class Bookrepo : IBookrepo
    {
        private readonly AppDbContext _context;
        private readonly IAdminRepo _adminrepo;
        public Bookrepo(AppDbContext appDbContext,IAdminRepo adminRepo)
        {
            _context = appDbContext;
            _adminrepo=adminRepo;
        }

         public async Task<List<books>> GetAllBooks()
        {
            var books = new List<books>();
            books = await _context.Bookdetails.Where(x => x.Id !=null).ToListAsync();
            if (books == null)
            {
                throw new BookNotFound("No books found");
            }
            return books;
        }

        public async Task<books> GetBook(string Id)
        {
            var book = new books();
            book = await _context.Bookdetails.Where(x => x.Id == Id).FirstOrDefaultAsync();
            if (book == null)
            {
                throw new BookNotFound("No books found");
            }
            return book;
        }

        //gets a list of books based on the book type
        public async Task<List<books>> GetTypeOfBooks(booktype type){
            var books = new List<books>();
            books = await _context.Bookdetails.Where(x =>x.Types == type).ToListAsync();
            if(books.Count== 0)
            {
                throw new BookNotFound("No books found");
            }
            return books;
        }

        //search for books based on title
        public async Task<List<books>> SearchBook(string title)
        {
            var books = new List<books>();
            books = await _context.Bookdetails.Where(book => book.Title.StartsWith(title)).ToListAsync();
            if (books.Count == 0)
            {
                throw new BookNotFound("No books found");
            }
            return books;
        }

    }



}
