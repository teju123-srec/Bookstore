using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookstore.Models;
using Microsoft.EntityFrameworkCore;

namespace bookstore.Context
{
    public class AppDbContext:DbContext
    { 

        public AppDbContext(DbContextOptions<AppDbContext>options):base(options)
        {

        }

        public DbSet<User>Users {get;set;}
        public DbSet<books>Bookdetails{get;set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           modelBuilder.Entity<User>().ToTable("users");
        }

        
    }

}