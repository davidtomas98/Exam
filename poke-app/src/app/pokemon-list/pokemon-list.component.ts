import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];
  filteredPokemonList: any[] = [];
  searchTerm: string = '';

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getRandomPokemonList(8).subscribe(
      (data: any) => {
        if (Array.isArray(data.results)) {
          this.pokemonList = data.results.map((pokemon: any) => ({
            id: this.extractPokemonIdFromUrl(pokemon.url),
            name: pokemon.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.extractPokemonIdFromUrl(pokemon.url)}.png`
          }));
          this.filteredPokemonList = this.pokemonList;
        }
      },
      (error: any) => {
        console.error('Ha ocurrido un error al obtener la lista de Pokémon:', error);
      }
    );
  }

  private extractPokemonIdFromUrl(url: string): number {
    const pattern = /\/(\d+)\/$/;
    const match = url.match(pattern);
    if (match && match[1]) {
      return Number(match[1]);
    }
    return 0;
  }

  searchPokemon() {
    if (this.searchTerm.trim() === '') {
      this.filteredPokemonList = this.pokemonList;
    } else {
      this.filteredPokemonList = this.pokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredPokemonList = this.pokemonList;
  }

  goToDetails(pokemonId: number) {
    this.router.navigate(['/pokemon', pokemonId]);
  }
}
