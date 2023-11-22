import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { FormComponent } from './components/form/form.component';
import { SingleUserComponent } from './components/single-user/single-user.component';

const routes: Routes = [
  {path : "", component: AllUsersComponent},
  {path : "single", component: FormComponent},
  {path : "singleUser/:id", component: SingleUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
