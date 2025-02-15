import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DayStatus } from "../day.model";


@Component({
  selector: "app-challenge-actions",
  templateUrl: "./challenge-actions.component.html",
  styleUrls: ["./challenge-actions.component.scss"],
  moduleId: module.id,
})
export class ChallengeActionsComponent implements OnInit {
  @Output() actionSelect = new EventEmitter<DayStatus>();
  @Input() cancelText='Cancle'
  action: 'complete' | 'fail' = null;

  constructor() {}

  ngOnInit() {}

 onAction(action: 'complete' | 'fail' | 'cancel') {
    let status = DayStatus.Open;
    if (action === 'complete') {
      status = DayStatus.Completed;
      this.action = 'complete';
    } else if (action === 'fail') {
      status = DayStatus.Failed;
      this.action = 'fail';
    } else if (action === 'cancel') {
      this.action = null;
    }
    this.actionSelect.emit(status);
  }
}
