import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {  RouterModule,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ValidateEqualModule } from 'ng-validate-equal';
import { CartComponent } from './cart/cart.component';
import { MangaComponent } from './manga/manga.component';
import { FictionComponent } from './fiction/fiction.component';
import { SearchComponent } from './search/search.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { FictionbookdetailsComponent } from './fictionbookdetails/fictionbookdetails.component';
import { MangabookdetailsComponent } from './mangabookdetails/mangabookdetails.component';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { JwtserviceService } from './services/jwtservice.service';


@NgModule({
  declarations: [
      AppComponent,
      FooterComponent,
      LoginComponent,
      HomeComponent,
      RegisterComponent,
      HeaderComponent,
      CartComponent,
      MangaComponent,
      FictionComponent,
      SearchComponent,
      BookdetailsComponent,
      FictionbookdetailsComponent,
      MangabookdetailsComponent,
      AdminComponent,
      AddBookComponent,
      AdminDashboardComponent,
      UpdateBookComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ValidateEqualModule,



  ],
  providers: [JwtserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
