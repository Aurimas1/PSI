namespace Shared
{
    public class School : ISchool
    {
        public string Name { get; }
        public string District { get; }
        public string Address { get; }

        public School(string name, string district, string address)
        {
            Name = name;
            District = district;
            Address = address;
        }
    }
}
