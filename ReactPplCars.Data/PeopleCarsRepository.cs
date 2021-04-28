﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReactPplCars.Data
{
    public class PeopleCarsRepository
    {
        private readonly string _connectionString;
        public PeopleCarsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetAll()
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }
        public void AddPerson(Person p)
        {
            using var context= new PeopleCarsDbContext(_connectionString);
            context.People.Add(p);
            context.SaveChanges();
        }
        public void AddCar(Car c)
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            context.Cars.Add(c);
            context.SaveChanges();
        }
        public List<Car> GetCars(int id)
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == id).ToList();
        }
        public void DeleteCars(List<int> ids)
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            var carsToDelete = context.Cars.Where(c => ids.Contains(c.Id));
            context.Cars.RemoveRange(carsToDelete);
            context.SaveChanges();

        }
        public Person GetById(int id)
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            return context.People.FirstOrDefault(p => p.Id == id);
        }
    }
}
