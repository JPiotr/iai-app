import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolComponent } from './tool/tool.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LeftToolbarComponent } from './left-toolbar/left-toolbar.component';
import { RightToolbarComponent } from './right-toolbar/right-toolbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NotyficationComponent } from './notyfication/notyfication.component';
import { NotyficationBarComponent } from './notyfication-bar/notyfication-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolComponent,
    NavigationComponent,
    LeftToolbarComponent,
    RightToolbarComponent,
    MainComponent,
    FooterComponent,
    NotyficationComponent,
    NotyficationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
