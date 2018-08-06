import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { StringComponent } from './string/string.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefranceComponent } from './template-refrance/template-refrance.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralDerectivesComponent } from './structural-derectives/structural-derectives.component';
import { ComponentIntegratonComponent } from './component-integraton/component-integraton.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


  


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    StringComponent,
    BindingComponent,
    EventBindingComponent,
    TemplateRefranceComponent,
    TwoWayBindingComponent,
    StructuralDerectivesComponent,
    ComponentIntegratonComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
