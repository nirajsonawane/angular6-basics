import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public buttonValue=""
  public eventDetails =""
  constructor() { }

  ngOnInit() {
  }

  public onClick(event)
  {
    this.buttonValue="Click performed!!"
    this.eventDetails =event.type
  }

}
