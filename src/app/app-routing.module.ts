import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicAddeditComponent } from './dynamic-addedit/dynamic-addedit.component';
import { DynamicIndexComponent } from './dynamic-index/dynamic-index.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

{path:'',redirectTo:'home',pathMatch:"full"},
{path:'home', component:HomePageComponent},
{path:'businessunits',component:DynamicIndexComponent},
{path:'regions',component:DynamicAddeditComponent},
{path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
