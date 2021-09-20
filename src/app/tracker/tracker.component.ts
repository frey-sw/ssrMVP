import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  @Input('title') title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
