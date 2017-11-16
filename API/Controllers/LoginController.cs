using System.Web.Http;

namespace API.Controllers
{
    public class LoginController : ApiController
    {
        public IHttpActionResult Get(string username, string password)
        {
            var login = new Repository.Login(System.Web.Hosting.HostingEnvironment.MapPath(@"~/App_Data/Login.csv"));
            var result = login.GetUser(username, password);
            if (result != null)
                return Ok(result);
            else
                return BadRequest("Prastas slaptažodis arba vartojo vardas"); 
        }
    }
}