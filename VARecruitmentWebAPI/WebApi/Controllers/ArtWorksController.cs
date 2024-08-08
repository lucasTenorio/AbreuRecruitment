using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VAArtGalleryWebAPI.Application.Queries;
using VAArtGalleryWebAPI.Application.Queries.ArtGalleries;
using VAArtGalleryWebAPI.Application.Queries.ArtWork;

namespace VAArtGalleryWebAPI.WebApi.Controllers
{
    [Route("api/art-work")]
    [ApiController]
    public class ArtWorksController(IMediator mediator) : ControllerBase{
        
        [HttpGet("{galleryId}")]
        public async Task<IActionResult> GetListArtworksAsync(
            Guid galleryId
        )
        {
            var result = await mediator.Send(new GetArtGalleryArtWorksQuery(galleryId));
            return Ok(result);
        }

        [HttpDelete("{artWorkId}")]
        public async Task<IActionResult> DeleteAsync( 
            Guid artWorkId
        )
        {
            var result = await mediator.Send(new DeleteByIdArtWorksQuery(artWorkId));
            if(result)
                return NoContent();
            return NotFound();
        }
    }
}
