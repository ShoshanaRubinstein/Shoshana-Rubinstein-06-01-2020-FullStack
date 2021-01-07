using BL;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{
    public class ChatController : ApiController
    {

        [HttpGet]
        public List<CityDTO> GetCitisByStr(string str)
        {
            return CityBL.GetCitisByStr(str);
        }

        [HttpGet]
        public WeatherDTO GetWeatherInCity(string cityKey)
        {
            return CityBL.GetWeatherInCity(cityKey);
        }
        public List<CityDTO> GetFavoriteCities()
        {
            return CityBL.GetFavoriteCities();
        }
      
        [HttpPost]
        public bool AddFavoriteCity(CityDTO favoriteCity)
        {
            return CityBL.AddFavoriteCity(favoriteCity);
        }
        [HttpDelete]
        public bool RemoveFavoriteCity(string cityKey)
        {
             return CityBL.RemoveFavoriteCity(cityKey);
           
        }

        
    }
}

