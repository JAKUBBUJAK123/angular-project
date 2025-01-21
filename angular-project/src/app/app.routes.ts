import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '' , loadChildren: () => import('./module/module.module').then(m=>m.ModuleModule)}
    //{path: 'form', component: FormComponent}
];
