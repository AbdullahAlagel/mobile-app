import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core/ui/page";
import { UIService } from "./ui.service";

declare var android: any;

@Component({
  selector: "app-action-bar",
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.scss"],
  moduleId: module.id,
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;
  @Input() showBackButton = true;
  @Input() hasMenu = true;

  
  isAndroid: boolean = true;
  constructor(
    private page: Page,
    private router: RouterExtensions,
    private uiService: UIService
  ) {}

  ngOnInit() {}

  // get android(){
  //   return isAndroid=true;
  // }
  get canGoBack() {
    return this.router.canGoBack() && this.showBackButton;
  }
  onGoBack() {
    this.router.backToPreviousPage();
  }

  onLoadedActionBar() {
    if (isAndroid) {
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavgationIcon();
      let color ='#171717';
      if (this.hasMenu) {
        color='#ffffff';
      }
      if (backButton) {
        backButton.setColorFilter(
          android.graphics.Color.parseColor(color),
          (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
        );
      }
    }
  }
  onToggleMenu() {
    this.uiService.toggleDrawer();
  }
}
