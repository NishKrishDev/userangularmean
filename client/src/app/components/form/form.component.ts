import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { GetAllUsersService } from 'src/app/service/getAllUsers/get-all-users.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor( private getFormUser : GetAllUsersService ) {}

  userFrom = new FormGroup({
    name : new FormControl(''),
    username : new FormControl('')
  })

  userData : any = {}

  onSubmit()
  {
    console.log(this.userFrom.value);
    // alert(this.userFrom.value)
    // return this.getSingleUser.getSingleUserApi(this.userFrom.value.username);
    this.getFormUser.getUserByForm(this.userFrom.value).subscribe((data) => {
      this.userData = data;
    } )
 
   
  }
}
