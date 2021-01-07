import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/assets/models/city';
import { Weather } from 'src/assets/models/weather';
import { MainService } from '../main.service';

@Component({
selector: 'app-main-screen',
templateUrl: './main-screen.component.html',
styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

constructor(private router: Router, private mainService:MainService) { }


@Output() onDeleteFavoriteCity: EventEmitter<City>= new EventEmitter<City>();
cuurentWeather:Weather=new Weather();
currentCity:City=new City();
succedToDeleteOrAdd:boolean;
removedFavorite:boolean;
errorMassage:boolean=false;

index:number;
@Input() cities:City[];
@Input() textButton:string;
@Input() type:string;

ngOnInit(): void {
}

getWeatherOfCity(index){
  this.cities.forEach(item=>item.isSelected=false);
  this.cities[index].isSelected=true;
  this.removedFavorite=false;
  this.currentCity=this.cities[index]
  this.mainService.getWeatherOfCity(this.currentCity.key).subscribe((data: Weather) => {
  this.cuurentWeather = data;
});

}
initFavoriteList(){
  this.onDeleteFavoriteCity.emit(this.currentCity);
  
}
addorDeleteFavoriteCity()
{ 
  if(this.currentCity.key==''){
    alert('select city')
  }
  else
  {
  this.textButton.indexOf("add")!=-1?this.mainService.addFavoriteCity(this.currentCity).subscribe((data: boolean) => {
    this.succedToDeleteOrAdd = data; 
  if(this.succedToDeleteOrAdd==false){
  this.errorMassage=true;
  }
    }):

this.mainService.removeFavoriteCity(this.currentCity).subscribe((data: boolean) => {
      this.succedToDeleteOrAdd = data;
      this.removedFavorite=true;
      this.initFavoriteList()   
      });
    
}
}
closeMassage()
{
this.succedToDeleteOrAdd=false;
this.errorMassage=false;
}

}
