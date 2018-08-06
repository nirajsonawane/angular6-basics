import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refrance',
  templateUrl: './template-refrance.component.html',
  styleUrls: ['./template-refrance.component.css']
})
export class TemplateRefranceComponent implements OnInit {

  private logMessageText
  constructor() { }

  ngOnInit() {
  }

  public logMessage(value)
  {
    this.logMessageText=value;
  }
}
