import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { LoginComponent } from './login/login.component';
import { ThinComponent } from './login/thin.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { BlenderComponent } from './databinding/blender.component';
import { EventBindingComponent } from './databinding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    LoginComponent,
    ThinComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    BlenderComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
