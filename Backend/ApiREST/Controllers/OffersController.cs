using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ServicesQueries;
using System.Threading.Tasks;
using ServicesQueries.DTO;

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
            var result = new List<Offer>()
            {

                new Offer() { Id=Guid.NewGuid(), Title = "title1", Description = "desc1", Price = 10, CreationData = DateTime.Now,
            ExpirationDate = new DateTime(2019, 11, 10), Negotiable = false, latMin = 50, latMax = 60, lngMin = 17, lngMax = 19 },
                new Offer() { Id=Guid.NewGuid(), Title = "title2", Description = "desc2", Price = 11, CreationData = DateTime.Now,
            ExpirationDate = new DateTime(2019, 11, 10), Negotiable = false, latMin = 50, latMax = 60, lngMin = 17, lngMax = 19 },
                new Offer() { Id=Guid.NewGuid(), Title = "title3", Description = "desc3", Price = 13, CreationData = DateTime.Now,
            ExpirationDate = new DateTime(2019, 11, 10), Negotiable = false, latMin = 50, latMax = 60, lngMin = 17, lngMax = 19 },
            };
            return Ok(result);

// var result = await queries.GetAllOffers();
// return Ok(result);
        }


        [HttpPost]
        public void Post(Data data)
        {

        }
    }


    public class Data
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}

