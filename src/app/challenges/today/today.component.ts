import { Component, OnDestroy, OnInit } from "@angular/core";
import { ChallengeService } from "../challenge.service";
import { Day, DayStatus } from "../day.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-today",
  templateUrl: "./today.component.html",
  styleUrls: ["./today.component.scss"],
  moduleId: module.id,
})
export class TodayComponent implements OnInit, OnDestroy {
  currnetDay: Day;
  private curChallengeSub: Subscription;
  constructor(private challengeService: ChallengeService) {}

  ngOnInit() {
    this.curChallengeSub = this.challengeService.currentChallenge.subscribe(
      (challenge) => {
        if (challenge) {
           this.currnetDay = challenge.currentDay;
        }
       
      }
    );
  }
  ngOnDestroy(): void {
    if (this.curChallengeSub) {
       this.curChallengeSub.unsubscribe();
    }
  }

  onInput(action: DayStatus) {
    this.challengeService.updateDayStatus(this.currnetDay.dayInMonth,action);
  }
}
