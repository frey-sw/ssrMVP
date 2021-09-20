import { Component } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ssrMVP";

  constructor(@Inject(DOCUMENT) private document: Document) {
    
  }
}
