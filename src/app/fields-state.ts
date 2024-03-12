import { FieldColor } from './field-color.enum';

export interface FieldsState {
    simpleField: FieldColor;
    mediumField: FieldColor;
    strongField: FieldColor; // Add strongField property
    difficultPassword: string;
  }

