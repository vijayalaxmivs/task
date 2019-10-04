import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  add:boolean=false;
  constructor() { }

  ngOnInit() {

}
visibleSidebar1(){
this.add=true;
}
visibleSidebar2(){
this.add=false;
}
}
