using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bookstore.Controllers
{
    public class BookNotFound:Exception
    {
         public BookNotFound(string message):base(message)
        {

        }
    }
}