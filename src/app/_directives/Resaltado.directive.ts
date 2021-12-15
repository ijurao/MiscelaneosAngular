import { Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor:string | undefined;
  @HostListener('mouseenter') mouseEnter(){
    if(this.element)
      this.element.nativeElement.style.backgroundColor = this.nuevoColor;

  }

  @HostListener('mouseleave') mouseLeave(){
    this.element.nativeElement.style.backgroundColor = null;

}
  constructor(private element: ElementRef) {


   }


}
