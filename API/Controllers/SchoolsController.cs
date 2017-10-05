using System.Collections.Generic;
using System.Web.Http;
using Shared;

namespace API.Controllers
{
    public class SchoolsController : ApiController
    {
        // GET api/values
        public IEnumerable<ISchool> Get()
        {
            var repository = new Repository.Repository();
            return repository.GetSchoolList();
        }

        // GET api/values
        public IEnumerable<ISchool> Get(string date, string district = null, string name = null, string from = null, string till = null)
        {
            var repository = new Repository.Repository();
            return repository.GetSchoolsBy(date, name?.Split(','), district?.Split(','));
        }
    }
}