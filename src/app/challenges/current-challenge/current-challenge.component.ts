import { Component, OnDestroy, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "@nativescript/angular";
import { Subscription } from "rxjs";

import { DayModalComponent } from "../day-modal/day-modal.component";
import { UIService } from "~/app/shared/ui/action-bar/ui.service";
import { ChallengeService } from "../challenge.service";
import { Challenge } from "../challenge.model";
import { Day, DayStatus } from "../day.model";

@Component({
  selector: "app-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.scss"],
  moduleId: module.id,
})
export class CurrentChallengeComponent implements OnInit,OnDestroy{
  weekDays=['S','M','T','W','T','F','S']
  currentChallenge: Challenge;
  private curChallengeSub :Subscription;
 
  constructor(
    private modalDialog: ModalDialogService,
    private vcRef: ViewContainerRef,
    private uiService: UIService,
    private challengeService:ChallengeService
  ) {}
 
  
  ngOnInit(): void {
    this.curChallengeSub = this.challengeService.currentChallenge.subscribe(challenge => {
      this.currentChallenge = challenge;
    });

  }
  ngOnDestroy(): void {
    if (this.curChallengeSub) {
      this.curChallengeSub.unsubscribe();
    }
  }
  
  getRow(index: number, day: { dayInMonth: number; dayInWeek: number }) {
    const startRow = 1;
    const weekRow = Math.floor(index / 7);
    const firstWeekDayOfMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    ).getDay();
    const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;

    return startRow + weekRow + irregularRow;
  }


  onChangeStatus(day: Day) {
    if (!this.getIsSettable(day.dayInMonth)) {
      return;
    }
    this.modalDialog
      .showModal(DayModalComponent, {
        fullscreen: true,
        viewContainerRef: this.uiService.getRootVCRef()
          ? this.uiService.getRootVCRef()
          : this.vcRef,
        context: { date: day.date }
      })
      .then((status: DayStatus) => {
        this.challengeService.updateDayStatus(day.dayInMonth, status);
      });
  }

  getIsSettable(dayInMonth: number) {
    return dayInMonth <= new Date().getDate();
  }

}
