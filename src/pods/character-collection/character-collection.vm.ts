export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  currentLocation: {
    name: string;
  };
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
  origin: {
    name: '',
  },
  currentLocation: {
    name: '',
  },
  image: '',
  bestSentence: '',
});
