import { Character } from './character.api-model';
import { graphql } from '#core/api/graphql.client';

const GET_CHARACTER = `
  query GetCharacter($id: ID!) {
    character(id: $id) {
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
`;

interface CharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const data = await graphql<CharacterResponse, { id: string }>({
    query: GET_CHARACTER,
    variables: { id },
  });
  return data.character;
};
