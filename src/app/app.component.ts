import { Component } from '@angular/core';
import { SimpsonsApi } from './service/simpsons-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-simpsons-api';
  listaPersonajes:any[] = [];

  constructor(private servicioSimpsons:SimpsonsApi){
  }

  // verificarApi(){

  //   this.servicioSimpsons.probarApi().subscribe((result)=>{
  //     console.log(result);
  //   });
  // }
  mostrarPersonaje(personaje:any){
    console.log(personaje);
    this.servicioSimpsons.probarApi(personaje).subscribe((result)=>{
      this.listaPersonajes=result;
    });
  }
}
