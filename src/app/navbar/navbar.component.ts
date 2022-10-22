import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input() seccionSobremi: any;
@Input() seccionEducacion: any;
@Input() seccionHabilidades: any;
@Input() seccionContacto: any;
  constructor() { }

  ngOnInit(): void {
  }

scrollHaciaSobremi() {

  this.seccionSobremi.scrollIntoView({
   behavior: 'smooth',
   block: 'start',
   inline: 'nearest'

  });


}
scrollHaciaEducacion() {

  this.seccionEducacion.scrollIntoView({
   behavior: 'smooth',
   block: 'start',
   inline: 'nearest'

  });

}

scrollHaciaHabilidades() {

  this.seccionHabilidades.scrollIntoView({
   behavior: 'smooth',
   block: 'start',
   inline: 'nearest'

  });

}

scrollHaciaContacto() {

  this.seccionContacto.scrollIntoView({
   behavior: 'smooth',
   block: 'start',
   inline: 'nearest'

  });

}
}
