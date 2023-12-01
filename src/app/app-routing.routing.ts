import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { FictionComponent } from './fiction/fiction.component';
import { MangaComponent } from './manga/manga.component';
import { FictionbookdetailsComponent } from './fictionbookdetails/fictionbookdetails.component';
import { MangabookdetailsComponent } from './mangabookdetails/mangabookdetails.component';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
  // {redirectTo:'',path:'login',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'search/:query',component:SearchComponent},
  {path:'bookdetails/:booksid',component:BookdetailsComponent},
  {path:'fiction',component:FictionComponent},
  {path:'fictionbookdetails/:fictionbookid',component:FictionbookdetailsComponent},
  {path:'manga',component:MangaComponent},
  {path:'mangabookdetails/:mangabookid',component:MangabookdetailsComponent},
  {path:'admin',component:AdminComponent},
  {path:'add-book',component:AddBookComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'update-book/:id',component:UpdateBookComponent}

];


@NgModule(
  {
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  }
  )

  export class AppRoutingModule{

  }
