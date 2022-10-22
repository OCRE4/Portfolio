import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectDos';

@ViewChild('seccionSobremi') seccionSobremi: ElementRef | any;
@ViewChild('seccionEducacion') seccionEducacion: ElementRef | any;
@ViewChild('seccionHabilidades') seccionHabilidades: ElementRef | any;
@ViewChild('seccionContacto') seccionContacto: ElementRef | any;

ngOnInit(): void {

}
}





