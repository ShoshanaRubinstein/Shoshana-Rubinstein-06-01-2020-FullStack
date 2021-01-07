import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MainScreenComponent } from './main-screen/main-screen.component';



const routes: Routes = [
{path: '', component: CitiesComponent},
{path: 'favorite', component: FavoriteComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
