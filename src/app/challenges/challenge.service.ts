import { Injectable } from "@angular/core";
import { BehaviorSubject, take } from "rxjs";
import { Challenge } from "./challenge.model";
import { DayStatus } from "./day.model";
import { stat } from "fs";

@Injectable({ providedIn: "root" })
export class ChallengeService {
  private _currentChallenge = new BehaviorSubject<Challenge>(null);

  // to make it accessable from out side 
  get currentChallenge(){
    return this._currentChallenge.asObservable();
  }

  createNewChallenge(title: string, description: string) {
    const newChallenge = new Challenge(
      title,
      description,
      new Date().getFullYear(),
      new Date().getMonth()
    );
    // save it to server leter 
    this._currentChallenge.next(newChallenge)
  }

  updateDayStatus(dayInMonth: number, status: DayStatus) {
    this._currentChallenge.pipe(take(1)).subscribe(challenge => {
      if (!challenge || challenge.days.length < dayInMonth) {
        return;
      }
      const dayIndex = challenge.days.findIndex(
        d => d.dayInMonth === dayInMonth
      );
      challenge.days[dayIndex].status = status;
      this._currentChallenge.next(challenge);
      console.log(challenge.days[dayIndex]);
      // Save this to a server
    });
  }
}
