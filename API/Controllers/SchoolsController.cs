using System.Collections.Generic;
using System.Web.Http;
using Shared;

namespace API.Controllers
{
    public class SchoolsController : ApiController
    {
        // GET api/values
        public IEnumerable<ISchool> Get(string district = null, string name = null)
        {
            var repository = new Repository.Repository(System.Web.Hosting.HostingEnvironment.MapPath(@"~/App_Data/Schools.csv"));
            if (district == null && name == null)
                return repository.GetSchoolList();
            return repository.GetSchoolsBy(name?.Split(','), district?.Split(','));
        }
    }
}