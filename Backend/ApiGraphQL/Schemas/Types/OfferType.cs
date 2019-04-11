using ApiGraphQL.TempDto;
using GraphQL.Types;

namespace ApiGraphQL.Schemas.Types
{
    public class OfferType : ObjectGraphType<OfferDTO>
    {
        public OfferType()
        {
            Field(t => t.Id);
            Field(t => t.Price);
            Field(t => t.Title);
            Field(t => t.Description);
        }
    }
}
