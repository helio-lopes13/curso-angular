import { Directive, Input,
  TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if (!condition) {
      this._view.createEmbeddedView(this._template);
    } else {
      this._view.clear();
    }
  };

  constructor( 
    private _template: TemplateRef<any>,
    private _view: ViewContainerRef 
  ) { }

}
