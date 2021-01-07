using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
public class CityDAL
{
    
    public static bool AddWeatherToTable(WeatherDTO weather)
    {
        using (var db = new weather_appEntities())
        {

            Weather newWeather = new Weather
            {
                WeatherText = weather.WeatherText,
                Temperature = weather.Temperature,
                CityKey=weather.CityKey


            };
            db.Weathers.Add(newWeather);
            try
            {
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }
               
        }
    }

      // get weather by city key
    public static WeatherDTO GetWeather(string cityKey)
    {
        using (var db = new weather_appEntities())
        {
           

            Weather weather = db.Weathers.FirstOrDefault(item=>item.CityKey==cityKey);
                if (weather != null)
                {
                    WeatherDTO weatherDTO = new WeatherDTO
                    {
                        WeatherText = weather.WeatherText,
                        Temperature = weather.Temperature,
                        CityKey = weather.CityKey



                    };
                    return weatherDTO;
                }

                else
                    return null;
               
        }
    }
    public static List<CityDTO> GetFavoriteCities()
    {
            
            using (var db = new weather_appEntities())
            {


            List<Favorite> cities = db.Favorites.ToList();
            List<CityDTO> citiesFavorite = new List<CityDTO>();
                foreach (var item in cities)
                {

                    CityDTO city = new CityDTO
                    {
                        Key = item.CityKey,
                        Name=item.CityName,
                            

                    };
                citiesFavorite.Add(city);
                }
                return citiesFavorite;
            }
        }

    public static bool RemoveFavoriteCity(string cityKey)
    { 
           

        using (var db = new weather_appEntities())
        {
            Favorite favoriteToDelete = db.Favorites.FirstOrDefault(favorite => favorite.CityKey == cityKey);
                
            db.Favorites.Remove(favoriteToDelete);
            try
            {
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }

        }
    }

    public static bool AddFavoriteCity(CityDTO favoriteCity)
    {

        using (var db = new weather_appEntities())
        {

            Favorite newFavorite = new Favorite
            {

                CityKey = favoriteCity.Key,
                CityName = favoriteCity.Name,



            };
            db.Favorites.Add(newFavorite);
            try
            {
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
             {

                return false;
            }

        }
    }
   

}
}