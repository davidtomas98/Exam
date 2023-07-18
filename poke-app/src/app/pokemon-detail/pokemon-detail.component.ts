import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any | null = null;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    // Obtener el ID del Pokémon desde la URL
    const pokemonId = this.route.snapshot.paramMap.get('id');
  
    // Verificar si pokemonId es nulo antes de usarlo
    if (pokemonId !== null) {
      // Obtener los detalles del Pokémon por su ID
      this.pokemonService.getPokemonById(+pokemonId).subscribe(
        (data: any) => {
          // Verificar si los datos del Pokémon están completos antes de asignarlos
          if (data && data.name && data.sprites && data.sprites.front_default) {
            this.pokemon = {
              name: data.name,
              imageUrl: data.sprites.front_default,
              generation: data.generation && data.generation.name ? data.generation.name : 'Unknown',
              abilities: data.abilities ? data.abilities.map((ability: any) => ability.ability.name) : []
            };
          } else {
            console.error('Los datos del Pokémon no están completos:', data);
          }
        },
        (error: any) => {
          console.error('Ha ocurrido un error al obtener los detalles del Pokémon:', error);
        }
      );
    }
  }
}
