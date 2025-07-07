import { Character } from './character-collection.api-model';
import { graphql } from '#core/api/graphql.client';

const GET_CHARACTERS = `
  query GetCharacters {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          id
          name
        }
        created
      }
    }
  }
`;

interface CharactersResponse {
  characters: {
    results: Character[];
  };
}

export const getCharacterCollection = async (): Promise<Character[]> => {
  const data = await graphql<CharactersResponse>({
    query: GET_CHARACTERS,
  });
  return data.characters.results;
};
