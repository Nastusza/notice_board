using System.Collections.Generic;
using System.Threading.Tasks;
using ServicesQueries.DTO;

namespace ServicesQueries
{
    public interface IQueries
    {
        Task<IEnumerable<Offer>> GetAllOffersAsync(OffersRequest request);

    }
}