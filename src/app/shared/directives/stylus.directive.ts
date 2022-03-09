import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStylus]'
})
export class DirectivesDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.color = 'red';
    this.fontsize = '35px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'green';
    this.fontsize = '24px';
  }

  @HostBinding('style.color') color: string = '';
  @HostBinding('style.fontSize') fontsize: string;

  constructor() { }



}
