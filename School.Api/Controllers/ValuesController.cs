using System.Collections.Generic;
using System.Web.Http;

namespace School.Api.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<Repository.School> Get()
        {
            var repository = new Repository.Repository();
            return repository.GetSchoolList();
        }

        // GET api/values
        public IEnumerable<Repository.School> Get(string date, string district = null, string name = null, string from = null, string till = null)
        {
            var repository = new Repository.Repository();
            return repository.GetSchoolsBy(date,name?.Split(','), district?.Split(','));
        }

        /*// GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }*/
    }
}
