import { Component, OnInit } from '@angular/core';
import { City } from 'src/assets/models/city';
import { MainService } from '../main.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(private mainService:MainService) { }
 favoriteCities:City[]=[];
 textFavorite:string='remove from fevorites';
 succedToDelete:boolean;
  ngOnInit(): void {

    this.mainService.getFavoriteCities().subscribe((data: City[]) => {
      this.favoriteCities = data;
       
      });
    
  }

  initFavoriteCity()
  {
    this.mainService.getFavoriteCities().subscribe((data: City[]) => {
      this.favoriteCities = data;
       
      });
}
}
