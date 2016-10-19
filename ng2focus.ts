import { ElementRef, Renderer, Directive } from '@angular/core';

@Directive({
  selector: "input:not([type=submit])[ng2focus], textarea[ng2focus]"
})
export class Ng2Focus {
  constructor( private ele : ElementRef, private renderer : Renderer ) {
  }

  ngAfterContentInit() {
    this.renderer.invokeElementMethod(this.ele.nativeElement, 'focus');
  }
}