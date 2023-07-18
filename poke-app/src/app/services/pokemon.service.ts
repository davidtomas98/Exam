import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  // Obtener lista de Pokémon aleatorios
  getRandomPokemonList(limit: number = 8): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon?limit=${limit}`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener detalles de un Pokémon por ID
  getPokemonById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener detalles de una habilidad por URL
  getAbilityDetails(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Buscar un Pokémon por nombre
  searchPokemonByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${name}`).pipe(
      catchError(this.handleError)
    );
  }

  // Función para manejar errores
  private handleError(error: any) {
    console.error('Ha ocurrido un error:', error);
    return [];
  }
}
