import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch:'full'},

  //Rota children
  //pai --> portifolio
  {path:'portifolio', component: CardComponent, children:[
  //filho --> portifolio/1
    {path:':id', component: CardComponent},
  //filho --> portifolio/1/abc
    {path:':id/:token', component: CardComponent},
  ]},
  
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
