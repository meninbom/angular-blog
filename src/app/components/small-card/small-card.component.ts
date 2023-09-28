import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

@Input()
  smallCardTitle:string = ""
@Input()
  coverPhoto:string = ""
@Input()
  smallCardDescription:string = ""
  @Input()
  Id:string = "0"



  constructor() { }

  ngOnInit(): void {
  }

}
