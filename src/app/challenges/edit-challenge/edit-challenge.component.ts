import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageRoute, RouterExtensions } from "@nativescript/angular";
import { ChallengeService } from "../challenge.service";

@Component({
  selector: "app-edit-challenge",
  templateUrl: "./edit-challenge.component.html",
  styleUrls: ["./edit-challenge.component.scss"],
  moduleId: module.id,
})
export class EditChallengeComponent implements OnInit {
  isCreating = true;
  constructor(private active: ActivatedRoute, private pageRout: PageRoute,private router :RouterExtensions,private challengeService:ChallengeService) {}

  ngOnInit(): void {
    //  this.active.paramMap.subscribe(paramMap =>{
    //   console.log(paramMap.get('mode')); });
    this.pageRout.activatedRoute.subscribe((activetedRout) => {
      activetedRout.paramMap.subscribe((paramMap) => {
        console.log(paramMap.get("mode"));
        if (!paramMap.has("mode")) {
          this.isCreating = true;
        } else {
          this.isCreating = paramMap.get("mode") !== "edit";
        }
      });
    });
  }
  onSubmit(title: string, description: string) {
    // ...
    this.challengeService.createNewChallenge(title, description);
    this.router.backToPreviousPage();
  }
}
