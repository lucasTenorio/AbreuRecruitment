using MediatR;
using VAArtGalleryWebAPI.Domain.Entities;
using VAArtGalleryWebAPI.Domain.Interfaces;

namespace VAArtGalleryWebAPI.Application.Queries.ArtGalleries
{
    public class GetArtGalleryArtWorksQueryHandler(IArtWorkRepository artWorkRepository) : IRequestHandler<GetArtGalleryArtWorksQuery, List<Domain.Entities.ArtWork>?>
    {
        public async Task<List<Domain.Entities.ArtWork>?> Handle(GetArtGalleryArtWorksQuery request, CancellationToken cancellationToken)
        {
            try
            {
                return await artWorkRepository.GetArtWorksByGalleryIdAsync(request.GalleryId, cancellationToken);
            }
            catch (ArgumentException ex) when (string.Compare(ex.ParamName, "artGalleryId", true) == 0) 
            {
                return null;
            }
        }
    }
}
