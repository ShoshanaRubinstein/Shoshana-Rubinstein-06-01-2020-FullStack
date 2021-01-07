using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
   public class WeatherDTO
    {
        public string WeatherText { get; set; }
        public string Temperature { get; set; }
        public string CityKey { get; set; }
    }
}
