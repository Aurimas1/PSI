using System.IO;
using System.Linq;

namespace Repository
{
    public class Login
    {
        private readonly string Path;

        public Login(string path)
        {
            Path = path;
        }

        public string GetUser(string username, string password)
        {
            return File.ReadAllLines(Path)
                .Select(x => x.Split(','))
                .Where(x => username == x[0] && password == x[1])
                .Select(x => x[0])
                .FirstOrDefault();
        }
    }
}
