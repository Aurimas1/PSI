using System.Collections.Generic;
using System.IO;
using System.Linq;
using Shared;

namespace Repository
{
    public class Repository
    {
        private readonly string Path;

        public Repository(string path)
        {
            Path = path;
        }

        public IEnumerable<ISchool> GetSchoolList()
        {
            return File.ReadAllLines(Path)
                       .Skip(1)
                       .Select(x => x.Split(','))
                       .Select(x => new School(x[0], x[1], x[2]))
                       .ToList();
        }

        public IEnumerable<ISchool> GetSchoolsBy(string[] names = null, string[] districts = null)
        {
            if (names == null && districts == null)
                return GetSchoolList();

            return File.ReadAllLines(Path)
                       .Skip(1)
                       .Select(x => x.Split(','))
                       .Where(x => (names?.Contains(x[0]) ?? false) || (districts?.Contains(x[1]) ?? false))
                       .Select(x => new School(x[0], x[1], x[2]))
                       .ToList();
        }
    }
}
