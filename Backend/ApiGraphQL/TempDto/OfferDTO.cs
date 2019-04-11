using System;

namespace ApiGraphQL.TempDto
{
    public class OfferDTO
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal? Price { get; set; }
    }
}
