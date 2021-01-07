import { Component, OnInit } from '@angular/core';
import { City } from 'src/assets/models/city';
import { MainService } from '../main.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  citiesList:City[];
  selctedCity:string;

  textCity:string='add to favorites'
  constructor(private mainService:MainService) { }

  ngOnInit(): void {
    this.citiesList=[{name:'Dhaka',key:'28143',isSelected:false},
    {name:'Mexico City',key:'242560',isSelected:false},
    {name:'Santiago',key:'60449',isSelected:false},
    {name:'Berlin',key:'178087',isSelected:false},
    {name:'London',key:'328328',isSelected:false},
    {name:'Madrid',key:'308526',isSelected:false},
    {name:'Hong Kong',key:'1123655',isSelected:false},
    {name:'Tel Aviv',key:'215854',isSelected:false},
    {name:'Jakarta',key:'208971',isSelected:false},
    {name:'Seoul',key:'226081',isSelected:false},
    ]
      
  }
  searchCity()
  {
   this.mainService.getCitiesByStr(this.selctedCity).subscribe((data: City[]) => {
    this.citiesList = data;
     
    });

  }
}
