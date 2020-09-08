import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from "./hello-world.component";

export const routes: Routes = [
    {
        path: '',
        component: HelloWorldComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ]
})
export class HelloWorldRoutingModule { }