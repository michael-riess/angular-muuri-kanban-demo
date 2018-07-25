import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomePageComponent } from '../home-page/home-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home-page',
        pathMatch: 'full'
    },
    {
        path: 'home-page',
        component: HomePageComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
