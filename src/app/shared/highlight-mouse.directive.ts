import { Directive, HostListener, HostBinding,
  ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter')
  onMouseOver() {
    /*this._render.setStyle(
      this._element.nativeElement,
      'background-color',
      'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    /*this._render.setStyle(
      this._element.nativeElement,
      'background-color',
      ''
    );*/
    this.backgroundColor = '';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor: string;

  constructor(
    // private _element: ElementRef,
    // private _render: Renderer2
  ) { 

  }

}
