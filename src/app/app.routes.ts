import { Routes } from '@angular/router';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { CareerComponent } from './Pages/career/career.component';
import { DigitalEngineeringComponent } from './Pages/digital-engineering/digital-engineering.component';
import { SoftwareEngineeringComponent } from './Pages/software-engineering/software-engineering.component';
import { ProductEngineeringComponent } from './Pages/product-engineering/product-engineering.component';
import { ConsultingComponent } from './Pages/consulting/consulting.component';
import { IndustriesComponent } from './Pages/industries/industries.component';

export const routes: Routes = [

    {
        path: '',
        component: HeaderFooterComponent,
        children: [
            {path: '', component: HomeComponent},
            {path:'about-us', component:AboutUsComponent},
            {path:'contact', component:ContactUsComponent},
            {path:'career', component: CareerComponent},
            {path:'digital-engineering', component: DigitalEngineeringComponent},
            {path:'software-engineering', component: SoftwareEngineeringComponent},
            {path:'product-engineering', component: ProductEngineeringComponent},
            {path:'consulting', component: ConsultingComponent},
            {path:'industries', component: IndustriesComponent},
            { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect any unknown child routes to HomepageComponent
        ]
    },
    { path: '**', redirectTo: '' } // Fallback route for the main app
];
