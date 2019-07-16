using Microsoft.AspNetCore.Mvc;
using ServicesQueries;
using ServicesQueries.DTO;
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
        public async Task<IActionResult> Get([FromQuery]OffersRequest request)
        {
            var result = await queries.GetAllOffersAsync(request);
            return Ok(result);
        }


        [HttpPost]
        public void Post(Offer offer)
        {

        }
    }
}

