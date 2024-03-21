import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ActivityIndicator, EventData, ItemEventData, LoadEventData, WebView } from '@nativescript/core';
import { on } from '@nativescript/core/application';
import {Item, ItemService} from './item-service.service'

@Component({
  moduleId: module.id,
  selector: 'app-list-challenge',
  templateUrl: './list-challenge.component.html',
  styleUrls: ['./list-challenge.component.scss']
})
export class ListChallengeComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  // constructor(private routerExtensions: RouterExtensions) { }

  // isBusy: boolean = true;

  // onBusyChanged(args: EventData) {
  //     let indicator: ActivityIndicator = <ActivityIndicator>args.object;
  //     console.log("indicator.busy changed to: " + indicator.busy);
  // }
  
  // minDate: Date = new Date(1975, 0, 29);
  // maxDate: Date = new Date(2045, 4, 12);

  // onDatePickerLoaded(args) {
  //     // const datePicker = args.object as DatePicker;
  // }

  // onDateChanged(args) {
  //     console.log("Date New value: " + args.value);
  //     console.log("Date value: " + args.oldValue);
  // }

  // onDayChanged(args) {
  //     console.log("Day New value: " + args.value);
  //     console.log("Day Old value: " + args.oldValue);
  // }

  // onMonthChanged(args) {
  //     console.log("Month New value: " + args.value);
  //     console.log("Month Old value: " + args.oldValue);
  // }

  // onYearChanged(args) {
  //     console.log("Year New value: " + args.value);
  //     console.log("Year Old value: " + args.oldValue);
  // }

  // items: Array<Item>;

  //   constructor(private _itemService: ItemService) { }

  //   ngOnInit(): void {
  //       this.items = this._itemService.getItems();
  //   }

  //   onItemTap(args: ItemEventData) {
  //       console.log(`Index: ${args.index}; View: ${args.view} ; Name: ${this.items[args.index].name}`);
  //   }

  //   templateSelector(item: Item, index: number, items: any) {
  //       return index % 2 === 0 ? "red" : "green";
  //   }
 
 
 
 
  // webViewSrc = "https://docs.nativescript.org/";

  // onLoadStarted(args: LoadEventData) {
  //     const webView = args.object as WebView;

  //     if (!args.error) {
  //         console.log("Load Start");
  //         console.log(`EventName: ${args.eventName}`);
  //         console.log(`NavigationType: ${args.navigationType}`);
  //         console.log(`Url: ${args.url}`);
  //     } else {
  //         console.log(`EventName: ${args.eventName}`);
  //         console.log(`Error: ${args.error}`);
  //     }
  // }
  // onLoadFinished(args: LoadEventData) {
  //     const webView = args.object as WebView;

  //     if (!args.error) {
  //         console.log("Load Finished");
  //         console.log(`EventName: ${args.eventName}`);
  //         console.log(`NavigationType: ${args.navigationType}`);
  //         console.log(`Url: ${args.url}`);
  //     } else {
  //         console.log(`EventName: ${args.eventName}`);
  //         console.log(`Error: ${args.error}`);
  //     }
  // }

  tabContainer = {
    backgroundColor: '#fff',
    focusColor: '#fff'
  };
  tabList: { text: string, icon?: string, color?: string, backgroundColor: string, fadeColor?: string }[] = [
    { text: 'A', backgroundColor: '#5B37B7', color: '#000' },
    { text: 'B', backgroundColor: '#E6A938', color: '#000' },
    { text: 'C', backgroundColor: '#C9449D', color: '#000' },
    { text: 'D', backgroundColor: '#4195AA', color: '#000' },
    { text: 'E', backgroundColor: '#4195AA', color: '#000' }
  ];

}
