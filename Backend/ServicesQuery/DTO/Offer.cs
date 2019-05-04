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
  //      public decimal? Price { get; set; }

        public LatLng LatLng { get; set; }

        public Offer()
        {
            LatLng = new LatLng()
            {
                Lat = 11.11,
                Lng = 12.23
            };
        }
    }

    internal class OfferMappings : Profile
    {
        public OfferMappings()
        {
            CreateMap<OfferEntity, Offer>();
        }
    }
}
