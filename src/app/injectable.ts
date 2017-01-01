import {AuthService} from "./auth.service";
import {LoggedInGardService} from "./logged-in-gard.service";
export let AUTH_PROVIDERS: Array<any> = [
  {provide: AuthService, useClass: AuthService},
  {provide: LoggedInGardService, useClass: LoggedInGardService}
];
