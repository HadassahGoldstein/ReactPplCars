﻿using System;
using System.Text.Json.Serialization;

namespace ReactPplCars.Data
{
    public class Car
    {
        public int Id { get; set; }
        public int PersonId { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        [JsonIgnore]
        public Person Person { get; set; }
    }
}
