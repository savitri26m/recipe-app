import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // event emitter is used to emit the custom events that we create to pass data across components
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
    console.log(feature);
  }

}
