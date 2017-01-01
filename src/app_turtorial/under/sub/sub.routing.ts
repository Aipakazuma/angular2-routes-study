import { Routes, RouterModule } from "@angular/router";
import { SubComponent } from "./sub.component";

export const subRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SubComponent }
    ]
  },
];

export const subRouting = RouterModule.forChild(subRoutes);
