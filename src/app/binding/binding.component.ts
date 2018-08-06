import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public name ="xyz"
  public otherValue = "SomeValue"
  public className ="text-success"

  public hasError=true
  public hasError2=false
  constructor() { }

  ngOnInit() {
  }

}
