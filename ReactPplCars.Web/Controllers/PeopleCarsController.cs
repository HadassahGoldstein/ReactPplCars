using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactPplCars.Data;
using ReactPplCars.Web.Models;

namespace ReactPplCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private string _connectionString;
        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpGet]
        [Route("GetAll")]
        public List<Person> GetAll()
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetAll();
        }
        [HttpPost]
        [Route("addPerson")]
        public void AddPerson(Person p)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddPerson(p);
        }
        [HttpPost]
        [Route("AddCar")]
        public void AddCar(Car c)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddCar(c);
        }
        [HttpPost]
        [Route("DeleteCars")]
        public void DeleteCars(DeleteCarsModel vm)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.DeleteCars(vm.Ids);
        }
        [HttpGet]
        [Route("GetCars")]
        public List<Car> GetCars(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetCars(id);
        }
        [HttpGet]
        [Route("GetById")]
        public Person GetById(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetById(id);
        }


    }
}
