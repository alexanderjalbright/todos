using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Todos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        static private List<string> all = new List<string>()
        {
            "First", "Second" , "Third"
        };

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return all;
        }

        [HttpPost]
        public ActionResult<bool> Post([FromBody] string todo)
        {
            all.Add(todo);
            return true;
        }
    }
}