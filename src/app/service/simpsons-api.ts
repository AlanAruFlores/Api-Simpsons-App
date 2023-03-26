import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SimpsonsApi {

  constructor(private http:HttpClient) { }

  probarApi(personaje:any):Observable<any>{
    const REQUEST_GET = `https://thesimpsonsquoteapi.glitch.me/quotes?character=${personaje.nombre}`;
    return this.http.get(REQUEST_GET);
  }
}
