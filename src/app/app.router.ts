import{Routes}from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import{SchComponent} from './sch/sch.component';
import{StudentComponent} from './student/student.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventComponent } from './event/event.component';
import { CourseComponent } from './course/course.component';
import { TstaffComponent } from './tstaff/tstaff.component';
import { Pro1Component } from './pro1/pro1.component';
import { AchComponent } from './ach/ach.component';
import { AboutComponent } from './about/about.component';
export const Approute:Routes=[
    {
        path:'home',
    component:DashboardComponent
    },
    {
        path:'sch',
    component:SchComponent
    },
    {
        path:'student',
    component:StudentComponent
    },
    {
        path:'gallery',
        component:GalleryComponent

    },
    {
        path:'event',
        component:EventComponent
    },
    
    {
        path:'course',
        component:CourseComponent
    },
    {
        path:'tstaff',
        component:TstaffComponent
    },
    {
        path:'pro1',
        component:Pro1Component
   },
   {
       path:'ach',
       component:AchComponent
   },
   {
    path:'about',
    component:AboutComponent
}
]