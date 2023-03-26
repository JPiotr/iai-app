import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { LeftToolbarComponent } from './components/left-toolbar/left-toolbar.component';
import { RightToolbarComponent } from './components/right-toolbar/right-toolbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotyficationComponent } from './components/notyfication/notyfication.component';
import { NotyficationBarComponent } from './components/notyfication-bar/notyfication-bar.component';
import { ToolComponent } from './components/tool/tool.component';
import { ScannerOptionComponent } from './components/navigation/scanner-option/scanner-option.component';

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
    NotyficationBarComponent,
    ScannerOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
