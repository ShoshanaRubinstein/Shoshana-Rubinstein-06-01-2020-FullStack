using DAL;
using Entities.DTO;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;


namespace BL
{
    public class CityBL
    {
       
       

        public static List<CityDTO> GetCitisByStr(string str)
        {
            List<CityDTO> citiesByStr = new List<CityDTO>();
            citiesByStr = getCities(str);
            return citiesByStr;
        }

        public static WeatherDTO GetWeatherInCity(string cityKey)
        {
            WeatherDTO weather = new WeatherDTO();
            // citykey at cityws weather
            weather = CityDAL.GetWeather(cityKey);
            if (weather== null)//not exist the city's weather in DB
            {
                //get weather by requst weather site
                weather = getWeatherFromAccuwhether(cityKey);
                weather.CityKey = cityKey;

                bool answer = CityDAL.AddWeatherToTable(weather);
            }
            return weather;
        }
        public static List<CityDTO> GetFavoriteCities()
        {
            return CityDAL.GetFavoriteCities();
        }


        public static bool RemoveFavoriteCity(string cityKey)
        {
            return CityDAL.RemoveFavoriteCity(cityKey);
        }

        public static bool AddFavoriteCity(CityDTO favoriteCity)
        {
            return CityDAL.AddFavoriteCity(favoriteCity);
        }
        public static List<CityDTO> getCities(string str)//return cities 
        {
            List<CityDTO> citiesByStr = new List<CityDTO>();


            string URL = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=JZtYSMVQFYu66KwvhhJjDaooGIK0ixvX&q="+str;
            

            WebRequest request = WebRequest.Create(URL);
            WebResponse response = request.GetResponse();
            //get json request
            Stream data = response.GetResponseStream();
            // parsing the result
            StreamReader reader = new StreamReader(data);
            string responseFromServer = reader.ReadToEnd();
            JArray array = JArray.Parse(responseFromServer);

            foreach (JObject obj in array.Children<JObject>())

            {
                CityDTO city = new CityDTO();
                city.Name = (obj.GetValue("LocalizedName").ToString());
                city.Key= (obj.GetValue("Key").ToString());
                citiesByStr.Add(city);


            }
            return citiesByStr;
        }

        public static WeatherDTO getWeatherFromAccuwhether(string cityKey)//return cuurent weather
        {

            WeatherDTO weather = new WeatherDTO();

            string URL = "http://dataservice.accuweather.com/currentconditions/v1/" + cityKey + "?apikey=JZtYSMVQFYu66KwvhhJjDaooGIK0ixvX";


            WebRequest request = WebRequest.Create(URL);
            WebResponse response = request.GetResponse();
            Stream data = response.GetResponseStream();
            StreamReader reader = new StreamReader(data);
            string responseFromServer = reader.ReadToEnd();
            JArray array = JArray.Parse(responseFromServer);
            foreach (JObject obj in array.Children<JObject>())

            { 
                weather.WeatherText = (obj.GetValue("WeatherText").ToString());
               var temperature = (obj.GetValue("Temperature").ToString());
                JObject jo = JObject.Parse(temperature);
               weather.Temperature= (string)jo.SelectToken("Metric.Value");

            }

            return weather;
             }
    }
}


