using System;
using AutoMapper;
using Infrastructure;
using Microsoft.EntityFrameworkCore;
using ServicesQueries.DTO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Infrastructure.Entities;

namespace ServicesQueries
{
    public class Queries : IQueries
    {
        private readonly TodoAroundDbContext context;
        private readonly IMapper mapper;

        public Queries(TodoAroundDbContext _context)
        {
            context = _context;

            var config = new MapperConfiguration(cfg => {
                cfg.AddProfile<OfferMappings>();
            });

            mapper = new Mapper(config);
        }

        public async Task<IEnumerable<Offer>> GetAllOffers()
        {
            var result = await context.Offers.ToListAsync();

            var mapped = mapper.Map<IEnumerable<Offer>>(result);

            return mapped;
        }
    }
}
