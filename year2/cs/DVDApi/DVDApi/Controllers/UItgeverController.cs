using DVDApi.Db;
using DVDApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DVDApi.Controllers
{
    [ApiController]
    [Route("uitgevers")]
    public class UitgeverController(DVDContext _context) : ControllerBase
    {
        private readonly DVDContext _context = _context;

        [HttpGet]
        public ActionResult<IEnumerable<Uitgever>> GetAll()
        {
            return Ok(_context.Uitgevers.ToArray());
        }

        [HttpGet("search")]
        public ActionResult<IEnumerable<Uitgever>> Search(string query)
        {
            // Ignore warnings
#pragma warning disable CA1862 // Use the 'StringComparison' method overloads to perform case-insensitive string comparisons
#pragma warning disable IDE0305 // Simplify collection initialization

            // Filter without checking for case
            IEnumerable<Uitgever> result = _context.Uitgevers.Where(u => u.Naam.ToLower().Contains(query.ToLower())).ToArray();

#pragma warning restore IDE0305 // Simplify collection initialization
#pragma warning restore CA1862 // Use the 'StringComparison' method overloads to perform case-insensitive string comparisons

            return Ok(result);
        }

        [HttpPost]
        public ActionResult Create([FromBody] Uitgever uitgever)
        {
            _context.Add(uitgever);
            _context.SaveChanges();

            return Created();
        }

        [HttpGet("{id}")]
        public ActionResult<Uitgever> GetByID(int id)
        {
            if (id < 0)
            {
                return BadRequest();
            }

            Uitgever? result = _context.Uitgevers.Include(u => u.DVDs).SingleOrDefault(u => u.ID == id);

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPut("{id}")]
        public ActionResult Update(int id, Uitgever newUitgever)
        {
            if (id < 0)
            {
                return BadRequest();
            }

            Uitgever? oldUitgever = _context.Uitgevers.SingleOrDefault(u => u.ID == id);

            if (oldUitgever == null)
            {
                return NotFound();
            }

            oldUitgever.Naam = newUitgever.Naam;
            oldUitgever.UitgeverNummer = newUitgever.UitgeverNummer;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteById(int id)
        {
            if (id < 0)
            {
                return BadRequest();
            }

            // Returns amount of deleted rows
            int amount = _context.Uitgevers.Where(u => u.ID == id).ExecuteDelete();

            if (amount == 0)
            {
                return NotFound();
            }

            return Ok();
        }
    }
}
