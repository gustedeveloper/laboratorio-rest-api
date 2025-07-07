import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from '#common/components';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent
            name="name"
            label="Name"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextFieldComponent
            name="status"
            label="Status"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextFieldComponent
            name="species"
            label="Species"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextFieldComponent
            name="type"
            label="Type"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextFieldComponent
            name="gender"
            label="Gender"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextFieldComponent
            name="origin"
            label="Origin"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextFieldComponent
            name="currentLocation"
            label="Current Location"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextFieldComponent
            name="image"
            label="Image"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextFieldComponent
            name="bestSentence"
            label="Best Sentence"
            multiline
            rows={3}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
