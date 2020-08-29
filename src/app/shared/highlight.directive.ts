import { Directive, HostListener, HostBinding,
  Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter')
  onMouseOver() {
    /*this._render.setStyle(
      this._element.nativeElement,
      'background-color',
      'yellow'
    );*/
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    /*this._render.setStyle(
      this._element.nativeElement,
      'background-color',
      ''
    );*/
    this.backgroundColor = this.defaultColor;
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('appHighlight') highlightColor: string = 'yellow';

  constructor(
    // private _element: ElementRef,
    // private _render: Renderer2
  ) { 

  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
