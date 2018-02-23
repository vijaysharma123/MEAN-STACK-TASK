import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { OrderModule } from 'ngx-order-pipe'; // <- import OrderModule
const appRoutes:Routes=[
{path:'',component:MoviesComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    FormsModule,
    OrderModule, // <- import OrderModule
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
