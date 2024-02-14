import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from "./child/child.component";
import { AngularConceptComponent } from './angular-concept/angular-concept.component';

export const routes: Routes = [
    {
        path:'parent',
        title:'parent companent',
        component:ParentComponent,
    },
    {
        path:'child',
        title:'child companent',
        component:ChildComponent,
    },
    {
        path:'angularconcept',
        title:'angular companent',
        component:AngularConceptComponent,
    }
];
