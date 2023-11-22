import { Component } from '@angular/core';
import { GetAllUsersService } from 'src/app/service/getAllUsers/get-all-users.service';
import { ActivatedRoute } from '@angular/router'
GetAllUsersService


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  constructor(private getSingleUser: GetAllUsersService, private router: ActivatedRoute) { }

  singleUser: any = []
  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this.getSingleUser.getSingleUserApi(id).subscribe((data: any) => {
        data.map((user: any) => {
          this.singleUser = user
        })
      })
    })
  }
}
