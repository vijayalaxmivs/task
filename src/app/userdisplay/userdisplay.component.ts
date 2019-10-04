import {  OnInit, Component } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { User } from '../user';
import { Router } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {

  arr:User[]=[];
  constructor(private _data:UserdataService,private _router:Router) { }

  ngOnInit() {
    this._data.getAllUsers().subscribe(
      (data:User[])=>{
        this.arr=data;
      }
    );
  }
  onUserEdit(item:User){
    this._router.navigate(['/edituser',item.user_email]);
  }

  onUserDelete(item:User){
    this._data.deleteUser(item.user_email).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),);
        alert('deleted');
        console.log(this.arr);
      }
    );
  }
  search(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.user_name.indexOf(value) != -1);
    } else {
      this._data.getAllUsers().subscribe(
        (data: User[]) => {
          this.arr = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
    }
    getPageInformation() {
      this._data.getAllUsers().subscribe(
        (data: User[]) => {
          this.arr = data;
          this.arr = this.arr['pagerInfo'];
          console.log(this.arr);

          this.arr = this.arr['user'];
        }
      );
    }
  onUserSave(f) {
    //console.log(f);
    this._data.addUser(f.value).subscribe((data: any) => {
      alert("record added");
    });
  }
    }
