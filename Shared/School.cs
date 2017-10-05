namespace Shared
{
    public class School : ISchool
    {
        public int Id { get; }
        public string Name { get; }
        public string Foto { get; }
        public string District { get; }
        public string Address { get; }
        public string Number { get; }
        public string Email { get; }

        public School(int id, string name, string foto, string district, string address, string number, string email)
        {
            Id = id;
            Name = name;
            Foto = foto;
            District = district;
            Address = address;
            Number = number;
            Email = email;
        }
    }
}
