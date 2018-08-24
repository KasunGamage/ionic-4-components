import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dialog', loadChildren: './dialog/dialog.module#DialogPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'map-native', loadChildren: './map-native/map-native.module#MapNativePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
