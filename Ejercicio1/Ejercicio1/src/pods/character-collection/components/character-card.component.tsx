import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Character } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: Character;
  onEdit: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  return (
    <Card>
      <CardHeader
        title={character.name}
        subheader={`${character.status} - ${character.species}`}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia image={character.image} style={{ paddingTop: '56.25%' }} />
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ marginTop: '10px' }}
          >
            Last known location:
            <br />
            {character.currentLocation.name}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            First seen in:
            <br />
            {character.origin.name}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
