import { Character } from './character.api-model';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`http://localhost:3000/api/character/${id}`);
  const data = await response.json();
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  const response = await fetch(
    `http://localhost:3000/api/character/${character.id}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(character),
    }
  );
  return response.ok;
};
