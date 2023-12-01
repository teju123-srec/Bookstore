using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookstore.Dto;
using bookstore.Models;
using Microsoft.AspNetCore.Mvc;

namespace bookstore.Repositories.Books
{
    public interface IBookrepo
    {
        Task<List<books>> GetAllBooks();
        Task <books> GetBook(string Id);
        Task<List<books>> GetTypeOfBooks(booktype type);
        Task<List<books>> SearchBook(string title);
    }
}