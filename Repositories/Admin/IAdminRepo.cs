using bookstore.Models;

namespace bookstore.Repositories.Admin
{
    public interface IAdminRepo
    {
        Task<bool> AddBook(books book);
        Task<bool> UpdateBook(books book);
        Task<bool> DeleteBook(string id);
    }
}
