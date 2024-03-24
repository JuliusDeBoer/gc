export type APIResource = {
  url: string;
};

export type NamedAPIResource = {
  name: string;
  url: string;
};

export type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};

export type VersionGameIndex = {
  game_index: number;
  version: NamedAPIResource;
};

export type PokemonHeldItem = {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion;
};

export type PokemonHeldItemVersion = {
  version: NamedAPIResource;
  rarity: number;
};

export type PokemonMove = {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
};

export type PokemonMoveVersion = {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
};

export type PokemonTypePast = {
  generation: NamedAPIResource;
  types: PokemonType[];
};

export type PokemonType = {
  slot: number;
  type: NamedAPIResource;
};

export type PokemonSprites = {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
  other: any;
};

export type PokemonCries = {
  latest: string;
  legacy: string;
};

export type PokemonStat = {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
};

export type PokemonSpeciesDexEntry = {
  entry_number: number;
  pokedex: NamedAPIResource;
};

export type Name = {
  name: string;
  language: NamedAPIResource;
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  cries: PokemonCries;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
};

export type PokemonSpecies = {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: NamedAPIResource;
  pokedex_numbers: PokemonSpeciesDexEntry[];
  egg_groups: NamedAPIResource[];
  color: NamedAPIResource;
  shape: NamedAPIResource;
  evolves_from_species: NamedAPIResource;
  evolution_chain: APIResource;
  habitat: NamedAPIResource;
  generation: NamedAPIResource;
  names: Name[];
};

export type EvolutionChain = {
  id: number;
  baby_trigger_item: NamedAPIResource;
  chain: ChainLink;
};

export type ChainLink = {
  is_baby: boolean;
  species: NamedAPIResource;
  evolution_details: EvolutionDetail[];
  evolves_to: ChainLink[];
};

export type EvolutionDetail = {
  item: NamedAPIResource;
  trigger: NamedAPIResource;
  gender: number;
  held_item: NamedAPIResource;
  known_move: NamedAPIResource;
  known_move_type: NamedAPIResource;
  location: NamedAPIResource;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
};
