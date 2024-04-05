using DVDApi.Db;
using DVDApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DVDApi.Controllers
{
    [ApiController]
    [Route("dvds")]
    public class DVDController(DVDContext _context) : ControllerBase
    {
        private readonly DVDContext _context = _context;

        [HttpGet]
        public ActionResult<IEnumerable<DVD>> GetAll()
        {
            return Ok(_context.DVDs.ToArray());
        }

        [HttpGet("search")]
        public ActionResult<IEnumerable<DVD>> Search(string query)
        {
            // Ignore warnings
#pragma warning disable CA1862 // Use the 'StringComparison' method overloads to perform case-insensitive string comparisons
#pragma warning disable IDE0305 // Simplify collection initialization

            // Filter without checking for case
            IEnumerable<DVD> result = _context.DVDs.Where(d => d.Titel.ToLower().Contains(query.ToLower())).ToArray();

#pragma warning restore IDE0305 // Simplify collection initialization
#pragma warning restore CA1862 // Use the 'StringComparison' method overloads to perform case-insensitive string comparisons

            return Ok(result);
        }

        [HttpPost]
        public ActionResult Create([FromBody] DVD dvd)
        {
            _context.Add(dvd);
            _context.SaveChanges();

            return Created();
        }

        [HttpGet("{id}")]
        public ActionResult<DVD> GetByID(int id)
        {
            // Make sure DVD exists
            if (id < 0)
            {
                return BadRequest();
            }

            DVD? result = _context.DVDs.SingleOrDefault(d => d.ID == id);

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPut("{id}")]
        public ActionResult Update(int id, DVD newDVD)
        {
            // Make sure DVD exists
            if (id < 0)
            {
                return BadRequest();
            }

            DVD? oldDVD = _context.DVDs.SingleOrDefault(d => d.ID == id);

            if (oldDVD == null)
            {
                return NotFound();
            }

            // Update DVD
            oldDVD.Titel = newDVD.Titel;
            oldDVD.UitgeverId = newDVD.UitgeverId;
            oldDVD.MaxDuur = newDVD.MaxDuur;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteById(int id)
        {
            // Make sure DVD exists
            if (id < 0)
            {
                return BadRequest();
            }

            // Returns amount of deleted rows
            int amount = _context.DVDs.Where(d => d.ID == id).ExecuteDelete();

            if (amount == 0)
            {
                return NotFound();
            }

            return Ok();
        }
    }
}
