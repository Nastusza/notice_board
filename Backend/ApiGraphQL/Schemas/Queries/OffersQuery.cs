using System;
using System.Collections.Generic;
using ApiGraphQL.Schemas.Types;
using ApiGraphQL.TempDto;
using GraphQL.Types;

namespace ApiGraphQL.Schemas.Queries
{
    public class OffersQuery : ObjectGraphType
    {
        public OffersQuery()
        {
            Field<ListGraphType<OfferType>>(
                "offers",
                resolve: context => new List<OfferDTO>()
                {
                    new OfferDTO() { Id = Guid.NewGuid(), Title = "Title 1", Description = "Description 1"},
                    new OfferDTO() { Id = Guid.NewGuid(), Title = "Title 2", Description = "Description 2"},
                    new OfferDTO() { Id = Guid.NewGuid(), Title = "Title 3", Description = "Description 3"}
                }
            );
        }
    }
}
