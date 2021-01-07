import { Injectable } from '@angular/core';
import {Observable,of, from } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from "@angular/common/http";
import { BaseHttpService, BaseApiService } from "../app/shared";
import { City } from 'src/assets/models/city';
import { Weather } from 'src/assets/models/weather';

@Injectable({
providedIn: 'root'
})
export class MainService extends BaseApiService {
ListCities:City[];
city:City=new City();
constructor(private router: Router, private http: HttpClient, private baseHttpService:BaseHttpService) { 
super('Chat');
}
getCities():Observable<City[]> 
{

let url = this.actionUrl('GetAll');
return this.baseHttpService.get<City[]>(url);

}


getCitiesByStr(str:string):Observable<City[]> 
{

let url = this.actionUrl('GetCitisByStr');
let params: URLSearchParams = new URLSearchParams();
params.set("str", str);
return this.baseHttpService.get<City[]>(url,params);

}

getWeatherOfCity(cityKey:string):Observable<Weather> 
{

let url = this.actionUrl('GetWeatherInCity');
let params: URLSearchParams = new URLSearchParams();
  params.set("cityKey", cityKey);
return this.baseHttpService.get<Weather>(url,params);

}

removeFavoriteCity(city:City):Observable<boolean>
{
  let params: URLSearchParams = new URLSearchParams();
  params.set("cityKey", city.key);
  let url = this.actionUrl('RemoveFavoriteCity');
  return this.baseHttpService.delete<boolean>(url,params);
}
addFavoriteCity(city:City):Observable<boolean>
{
  let url = this.actionUrl('AddFavoriteCity');
  return this.baseHttpService.post<boolean>(url,city);
}

// addOrDeleteFavoriteCity(city:City):Observable<boolean>
// {
//   let url = this.actionUrl('addOrDeleteFavoriteCity');
//   return this.baseHttpService.put<boolean>(url,city);
// }

getFavoriteCities():Observable<City[]> 
{

let url = this.actionUrl('GetFavoriteCities');
return this.baseHttpService.get<City[]>(url);

}


}
