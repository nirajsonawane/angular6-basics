import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-integraton',
  templateUrl: './component-integraton.component.html',
  styleUrls: ['./component-integraton.component.css']
})
export class ComponentIntegratonComponent implements OnInit {

  constructor() { }
  
  @Input() public parentData 

  @Output() public childEvent = new EventEmitter();

  //@Input('parentData') public nameAsalise; 
  ngOnInit() {
  }

  public sendData()
  {
    this.childEvent.emit("hey.. this Data is From Child")
  }

}
