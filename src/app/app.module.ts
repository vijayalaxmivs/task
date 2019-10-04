import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './app.route';
import { EdituserComponent } from './edituser/edituser.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationComponent } from './pagination/pagination.component';
import {SidebarModule} from 'primeng/sidebar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,

    UserdisplayComponent,

    SignupComponent,

    NavbarComponent,

    EdituserComponent,

    PaginationComponent,

    FirstpageComponent,

    PipePipe,

  ],
  imports: [ HttpClientModule,routing,
    BrowserModule,NgxPaginationModule,SidebarModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
