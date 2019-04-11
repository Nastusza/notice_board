using System;
using AutoMapper;
using Infrastructure.Entities;

namespace ServicesQueries.DTO
{
    public class Offer
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal? Price { get; set; }
    }

    internal class OfferMappings : Profile
    {
        public OfferMappings()
        {
            CreateMap<OfferEntity, Offer>();
        }
    }
}
