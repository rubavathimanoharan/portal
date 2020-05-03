import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { Approute } from './app.router';
import { SchComponent } from './sch/sch.component';
import { StudentComponent } from './student/student.component';
import { TstaffComponent } from './tstaff/tstaff.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventComponent } from './event/event.component';
import { CourseComponent } from './course/course.component';
import { Pro1Component } from './pro1/pro1.component';
import { AchComponent } from './ach/ach.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardComponent,
    TopbarComponent,
    SchComponent,
    StudentComponent,
    TstaffComponent,
    GalleryComponent,
    EventComponent,
    CourseComponent,
    Pro1Component,
    AchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Approute),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }