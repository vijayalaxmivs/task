import { Routes,RouterModule } from "@angular/router";


import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FirstpageComponent } from './firstpage/firstpage.component';


const arr : Routes=[
  {path:'',component:FirstpageComponent},
  {path:'userdisplay', component:UserdisplayComponent},
  {path:'signup', component:SignupComponent},
  {path:'edituser/:user_email',component:EdituserComponent}

];

export const routing=RouterModule.forRoot(arr);
