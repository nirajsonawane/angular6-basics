import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-derectives',
  templateUrl: './structural-derectives.component.html',
  styleUrls: ['./structural-derectives.component.css']
})
export class StructuralDerectivesComponent implements OnInit {



  public display=false

  public list = ["iteam1" , "iteam2", "iteam3"]
  constructor() { }

  ngOnInit() {
  }

}
