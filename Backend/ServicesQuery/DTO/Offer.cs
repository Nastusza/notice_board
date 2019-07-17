using System;
using AutoMapper;
using Infrastructure.Entities;
using Remotion.Linq.Clauses.ResultOperators;

namespace ServicesQueries.DTO
{
    public class Offer
    {
     //  public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
<<<<<<< HEAD
        public decimal? Price { get; set; }
        public DateTime CreationData { get; set; }
        public DateTime ExpirationData { get; set; }
        public bool Negotiable { get; set; }
        public double latMin { get; set; }
        public double latMax { get; set; }
        public double lngMin { get; set; }
        public double lngMax { get; set; }

=======
 

        public LatLng LatLng { get; set; }

        public Offer()
        {
            LatLng = new LatLng()
            {
                Lat = 11.11,
                Lng = 12.23
            };
        }
>>>>>>> f3a2c61ff4349fe8eb9cb1b4391f1909cc85921c
    }
}

    internal class OfferMappings : Profile
    {
        public OfferMappings()
        {
            CreateMap<OfferEntity, Offer>();
        }
    }


