import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core/ui/page";

@Component({
  selector: "app-challenge-taps",
  templateUrl: "./challenge-taps.component.html",
  styleUrls: ["./challenge-taps.component.scss"],
  moduleId: module.id,
})
export class ChallengeTapsComponent implements OnInit {
  constructor(
    private router: RouterExtensions,
    private active: ActivatedRoute,
    private page: Page
  ) {}

  ngOnInit() {
    this.router.navigate(
      [
        {
          outlets: {
            currentChallenge: ["current-challenge"],
            today: ["today"],
            listchallenge: ["list-challenge"],
          },
        },
      ],
      { relativeTo: this.active }
    );
    this.page.actionBarHidden = true; // hide action bar
  }
}
