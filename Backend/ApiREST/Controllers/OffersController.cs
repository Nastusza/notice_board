using Microsoft.AspNetCore.Mvc;
using ServicesQueries;
using System.Threading.Tasks;

namespace ApiREST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OffersController : ControllerBase
    {
        private readonly IQueries queries;

        public OffersController(IQueries _queries)
        {
            queries = _queries;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await queries.GetAllOffers();
            return Ok(result);
        }
    }
}
