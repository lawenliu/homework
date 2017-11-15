using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SendEmail.Models;
using SendEmail.Helpers;
using Microsoft.AspNetCore.Cors;

namespace SendEmail.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("CorsPolicy")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "{ message: " + Utilities.SendEmail("lwc541117@hotmail.com") + "}";
        }

        // POST api/values
        [HttpPost]
        public string Post([FromBody]string email)
        {
            return "{ \"message\": \"" + Utilities.SendEmail(email) + "\"}";
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
