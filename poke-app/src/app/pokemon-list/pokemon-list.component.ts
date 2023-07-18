import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = []; // Array para almacenar la lista de Pokémon

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPokemonList(); // Al inicializar el componente, se obtiene la lista de Pokémon
  }

  // Función para obtener la lista de Pokémon aleatorios desde el servicio
  getPokemonList() {
    this.pokemonService.getRandomPokemonList(8).subscribe(
      (data: any) => {
        console.log(data); // Mostrar los datos obtenidos por consola
        if (Array.isArray(data.results)) {
          // Mapear los datos obtenidos a un array de objetos con id, nombre e imagenUrl
          this.pokemonList = data.results.map((pokemon: any) => ({
            id: this.extractPokemonIdFromUrl(pokemon.url),
            name: pokemon.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.extractPokemonIdFromUrl(pokemon.url)}.png`
          }));
        }
      },
      (error: any) => {
        console.error('Ha ocurrido un error al obtener la lista de Pokémon:', error);
      }
    );
  }

  // Función para extraer el ID del Pokémon de la URL
  private extractPokemonIdFromUrl(url: string): number {
    const pattern = /\/(\d+)\/$/;
    const match = url.match(pattern);
    if (match && match[1]) {
      return Number(match[1]);
    }
    return 0;
  }

  // Función para redirigir a la página de detalles de un Pokémon al hacer clic en "View Details"
  goToDetails(pokemonId: number) {
    this.router.navigate(['/pokemon', pokemonId]);
  }
}
