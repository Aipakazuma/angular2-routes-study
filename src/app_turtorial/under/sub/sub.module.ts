import { NgModule } from "@angular/core";
import { subRouting } from "./sub.routing";
import { SubComponent } from "./sub.component";

@NgModule({
  imports: [
    subRouting,
  ],
  declarations: [
    SubComponent,
  ],
})
export class SubModule {
}
