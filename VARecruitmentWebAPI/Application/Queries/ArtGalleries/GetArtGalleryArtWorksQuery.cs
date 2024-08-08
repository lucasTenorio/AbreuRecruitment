using MediatR;
using VAArtGalleryWebAPI.Domain.Entities;

namespace VAArtGalleryWebAPI.Application.Queries.ArtGalleries
{
    public class GetArtGalleryArtWorksQuery(Guid galleryId) : IRequest<List<Domain.Entities.ArtWork>>
    {
        public Guid GalleryId { get; set; } = galleryId;
    }
}