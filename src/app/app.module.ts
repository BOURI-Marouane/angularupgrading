import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {APP_BASE_HREF} from '@angular/common';
import { AuthGuard } from 'src/app/utility/app.guard';

const routes: Routes = [
  {path:'',component:ShoppingCartComponent},
  {path:'login',component:ShoppingCartComponent,canActivate : [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
