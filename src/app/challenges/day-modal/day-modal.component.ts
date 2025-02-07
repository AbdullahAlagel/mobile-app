import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from '@nativescript/angular';
import { DayStatus } from '../day.model';

@Component({
  selector: 'app-day-modal',
  templateUrl: './day-modal.component.html',
  styleUrls: ['./day-modal.component.css']
})
export class DayModalComponent implements OnInit {
 
  loadedDate:Date;
  constructor(private modalParams:ModalDialogParams) { }

  ngOnInit() {
    this.loadedDate = (this.modalParams.context as {date: Date}).date
  }

  onInput(action:DayStatus){
    this.modalParams.closeCallback(action);
  }

  
}
