namespace DVDApi.Models
{
    public class Uitgever
    {
        public int ID { get; set; }
        public string Naam { get; set; } = string.Empty;
        public int UitgeverNummer { get; set; }
        public required ICollection<DVD> DVDs { get; set; }
    }
}
