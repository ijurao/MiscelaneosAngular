import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './_components/ng-style/ng-style.component';
import { CssComponent } from './_components/css/css.component';
import { NgClassComponent } from './_components/ng-class/ng-class.component';
import { ResaltadoDirective } from './_directives/Resaltado.directive';
import { NgSwitchComponent } from './_components/ng-switch/ng-switch.component';
import { HomeComponent } from './_components/home/home.component';
import { UserComponent } from './_components/user/user.component';
import { NewUserComponent } from './_components/user/new-user.component';
import { EditUserComponent } from './_components/user/edit-user.component';
import { DetailUserComponent } from './_components/user/detail-user.component';
import { NavbarComponent } from './_components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    NgClassComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    DetailUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
