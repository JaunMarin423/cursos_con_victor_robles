import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {
    
    }

    ngOnInit(){
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.

      var element = this.el.nativeElement;
      element.style.background = "blue";
      element.style.padding = "20px";
      element.style.margintop = "15px";
      element.style.color = "white";
      
      element.innerText = element.innerText.toUpperCase().replace("CONTACTO", "|||||");
    }
  
}
