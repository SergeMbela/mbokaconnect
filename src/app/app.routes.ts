import { Routes } from '@angular/router';

import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BuildingComponent } from './pages/building/building.component';
import { AgricultureComponent } from './pages/agriculture/agriculture.component';
import { AutomobileComponent } from './pages/automobile/automobile.component';
import { EducationComponent } from './pages/education/education.component';
import { AccountComponent } from './pages/account/account.component';


export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'construction', component: BuildingComponent },
    { path: 'construction', component: BuildingComponent },
    { path: 'agriculture', component: AgricultureComponent },
    { path: 'agriculture', component: AgricultureComponent },
    { path: 'automobile', component: AutomobileComponent },
    { path: 'automobile', component: AutomobileComponent },
    { path: 'education', component: EducationComponent },

    { path: 'account', component: AccountComponent },
    { path: '**', redirectTo: '' } // Redirige les routes inconnues vers la page d'accueil
];
