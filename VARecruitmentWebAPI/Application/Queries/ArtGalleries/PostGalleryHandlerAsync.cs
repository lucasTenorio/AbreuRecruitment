using System;
using MediatR;
using VAArtGalleryWebAPI.Domain.Entities;
using VAArtGalleryWebAPI.Domain.Interfaces;

namespace VAArtGalleryWebAPI.Application.Queries.ArtGalleries;

public class PostGalleryHandlerAsync(IArtGalleryRepository artGalleryRepository) : IRequestHandler<PostGalleryQuery, ArtGallery>
{
    public async Task<ArtGallery> Handle(PostGalleryQuery request, CancellationToken cancellationToken)
    {
        var model = new ArtGallery(request.CreateArtGalleryRequest.Name, request.CreateArtGalleryRequest.City, request.CreateArtGalleryRequest.Manager);

        return await artGalleryRepository.CreateAsync(model, cancellationToken);
    }
}
