using System;
using MediatR;
using VAArtGalleryWebAPI.Domain.Entities;

namespace VAArtGalleryWebAPI.Application.Queries.ArtWork;

public class DeleteByIdArtWorksQuery(Guid artWorkId) : IRequest<bool>
{
    public Guid ArtWorkId { get; set; } = artWorkId;
}
