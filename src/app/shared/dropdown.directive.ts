import { Directive, HostBinding, HostListener } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}

// @HostListner takes event(eg: click, mouseover etc) which is support by DOM as an argument in form of string.
// It is use to listen to the event occuring on the DOM element

// @HostBinding, takes a string as an argument defining which property of the host element we are binding to (eg: class, style etc)