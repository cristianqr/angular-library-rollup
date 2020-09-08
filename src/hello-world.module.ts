import { NgModule } from "@angular/core";
import { HelloWorldComponent } from "./hello-world.component";
import { HelloWorldRoutingModule } from './hello-world-routing.module';

@NgModule({
    imports: [HelloWorldRoutingModule],
    declarations: [HelloWorldComponent],
    exports: [HelloWorldComponent],
})
export class HelloWorldModule { }