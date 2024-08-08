using MediatR;
using VAArtGalleryWebAPI.Domain.Entities;

namespace VAArtGalleryWebAPI.Application.Queries.ArtGalleries
{
    public class GetAllArtGalleriesQuery : IRequest<List<ArtGallery>>
    {
    }
}
