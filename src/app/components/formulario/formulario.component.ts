import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personajeSeleccionado = new EventEmitter<any>();
  nombrePersonaje:string;

  constructor() { }

  ngOnInit(): void {
  }

  public mandarInformacion()
  { 
    const personaje = {
      nombre: this.nombrePersonaje
    };
    
    this.personajeSeleccionado.emit(personaje);
  }
}
