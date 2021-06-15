import { NgModule } from '@angular/core';
import { CustomersComponent } from './components/customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';

const routes:Routes=[

  {path:'',component:LoginComponent,children:[
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {path:"contacts",component:ContactsComponent},
  {path:"customers",component:CustomersComponent},
  {path:"customers/new",component:CustomersNewComponent},
  {path:"customers/:id",component:CustomersDetailsComponent},
  {path:"customers/:id/edit",component:CustomersEditComponent},
  {path:"pageNotFound",component:PageNotFoundComponent},
  {path: '**', redirectTo: 'pageNotFound', pathMatch: 'full'}
]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
