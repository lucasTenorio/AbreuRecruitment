using System;
using MediatR;
using VAArtGalleryWebAPI.Domain.Entities;
using VAArtGalleryWebAPI.WebApi.Models;

namespace VAArtGalleryWebAPI.Application.Queries.ArtGalleries;

public class PostGalleryQuery(CreateArtGalleryRequest createArtGalleryRequest) : IRequest<ArtGallery>
{
    public CreateArtGalleryRequest CreateArtGalleryRequest { get; set; } = createArtGalleryRequest;
}
