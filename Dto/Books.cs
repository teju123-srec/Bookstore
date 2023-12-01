using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using bookstore.Models;

namespace bookstore.Dto
{
    public class BooksResponse

    {
        public string? Id { get; set; }

        public string? Title { get; set; }

        public string? Author { get; set; }

        public int? Price { get; set; }

        public string? Image { get; set; }

        public string? Description { get; set; }

        public booktype Types { get; set; }

    }

    public class BooksRequest
    {
        public string Id {get;set;}
        public booktype Types {get;set;}

    }
}