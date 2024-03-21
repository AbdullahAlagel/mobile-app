import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptModule,
} from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { EditChallengeComponent } from "./challenges/edit-challenge/edit-challenge.component";
import { CurrentChallengeComponent } from "./challenges/current-challenge/current-challenge.component";
import { AuthComponent } from "./auth/auth.component";
import { TodayComponent } from "./challenges/today/today.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { ActionBarComponent } from './shared/ui/action-bar/action-bar.component';
import { ChallengeTapsComponent } from './challenges/challenge-taps/challenge-taps.component';
import { DayModalComponent } from './challenges/day-modal/day-modal.component';
import { ChallengeActionsComponent } from './challenges/challenge-actions/challenge-actions.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ListChallengeComponent } from './challenges/list-challenge/list-challenge.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptFormsModule, ReactiveFormsModule,AppRoutingModule,NativeScriptUISideDrawerModule],
  declarations: [
    AppComponent,
    AuthComponent,
    TodayComponent, 
    CurrentChallengeComponent,
    EditChallengeComponent,
    ActionBarComponent,
    ChallengeTapsComponent,
    DayModalComponent,
    ChallengeActionsComponent,
    ListChallengeComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  // entryComponents:[DayModalComponent]
})
export class AppModule {
  activeChallenge = "";

  onChallengeInput(challengeDescription: string) {
    this.activeChallenge = challengeDescription;
    console.log("onChallengeInput: ", challengeDescription);
  }
}
