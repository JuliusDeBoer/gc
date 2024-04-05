namespace DVDApi.Models
{
    public class DVD
    {
        public int ID { get; set; }
        public string Titel { get; set; } = string.Empty;
        public int MaxDuur { get; set; } // MaxDuur is in seconden
        public int UitgeverId { get; set; }
        public virtual Uitgever? Uitgever { get; set; }
    }
}
