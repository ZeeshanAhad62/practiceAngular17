import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';




export const routes: Routes = [
    {'path':'',component:HomeComponent},
    {'path':'aboutUs',component:AboutUsComponent},
    {'path':'contactUs',component:ContactUsComponent},
    {'path':'services',component:ServicesComponent},

];
