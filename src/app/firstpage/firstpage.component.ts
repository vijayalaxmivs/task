import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  opensec(){
this.route.navigate(['/userdisplay']);
  }
}
