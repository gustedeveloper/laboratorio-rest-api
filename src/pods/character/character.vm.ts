export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  currentLocation: string;
  image: string;
  bestSentence: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: '',
  currentLocation: '',
  image: '',
  bestSentence: '',
});
