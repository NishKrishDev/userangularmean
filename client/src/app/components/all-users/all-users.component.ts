import { Component } from '@angular/core';
import { GetAllUsersService } from 'src/app/service/getAllUsers/get-all-users.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  constructor(private getAllUsers: GetAllUsersService) {}

  allUsers : any = [];

  ngOnInit()
  {
    this.getAllUsers.getAllUsersApi().subscribe((data : any) => {
      data.map((userData  :any) => {
        this.allUsers.push(userData)
      } )
      // console.log(this.allUsers)
    })
  }
}
