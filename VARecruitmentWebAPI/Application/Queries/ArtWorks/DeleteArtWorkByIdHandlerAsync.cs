using System;
using MediatR;
using VAArtGalleryWebAPI.Domain.Interfaces;

namespace VAArtGalleryWebAPI.Application.Queries.ArtWork;

public class DeleteArtWorkByIdHandlerAsync(IArtWorkRepository artWorkRepository) : IRequestHandler<DeleteByIdArtWorksQuery, bool>
{

    public async Task<bool> Handle(DeleteByIdArtWorksQuery request, CancellationToken cancellationToken)
    {
        var result = await artWorkRepository.DeleteAsync(request.ArtWorkId, cancellationToken);
        return result;
    }
}
