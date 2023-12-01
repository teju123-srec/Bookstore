using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bookstore.Controllers
{
    public class AuthenticateException:Exception
    {
         public AuthenticateException(string message):base(message)
        {

        }
    }
}