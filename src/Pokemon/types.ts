export interface IStat {
  name: string;
  stat: number;
}

export interface IPokemonData {
  name: string;
  sprite_img: string;
  stats: IStat[];
}
