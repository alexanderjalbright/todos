using System;
using System.Linq;
using Todos.Controllers;
using Xunit;

namespace Todos.Test
{
    public class ValuesControllerTests
    {
        [Fact]
        public void GET_Returns_List_of_Todos()
        {
            var underTest = new TodosController();

            var result = underTest.Get();

            Assert.Equal(3, result.Value.Count());
        }

        [Fact]
        public void Post_Creates_New_Todo()
        {
            var underTest = new TodosController();

            var result = underTest.Post("Hello World");

            Assert.True(result.Value);
        }

        [Fact] 
        public void Post_Increases_Todos_Count()
        {
            var underTest = new TodosController();
            underTest.Post("Foo");

            var result = underTest.Get();

            Assert.Equal(4, result.Value.Count());
        }
    }
}
