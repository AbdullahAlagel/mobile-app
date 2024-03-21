import { NgModule } from "@angular/core";

import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { AuthComponent } from "./auth/auth.component";
import { TodayComponent } from "./challenges/today/today.component";
import { CurrentChallengeComponent } from "./challenges/current-challenge/current-challenge.component";
import { EditChallengeComponent } from "./challenges/edit-challenge/edit-challenge.component";
import { ChallengeTapsComponent } from "./challenges/challenge-taps/challenge-taps.component";
import { ListChallengeComponent } from "./challenges/list-challenge/list-challenge.component";

const routes: Routes = [
  { path: "", component: AuthComponent },
  {
    path: "challenges",
    children: [
      {
        path: "tabs",
        component: ChallengeTapsComponent,
        children: [
          { path: "today", component: TodayComponent, outlet: "today" },
          {
            path: "current-challenge",
            component: CurrentChallengeComponent,
            outlet: "currentChallenge",
          },
          {
            path: "list-challenge",
            component: ListChallengeComponent,
            outlet: "listchallenge",
          }
        ],
      },
      { path: ":mode", component: EditChallengeComponent },
      { path: "", redirectTo: "/challenges/tabs", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
