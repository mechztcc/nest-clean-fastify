import { validateSync } from 'class-validator';
import {
  FieldsError,
  ValidatorsFieldsInterface,
} from './validator-field.interface';

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorsFieldsInterface<PropsValidated>
{
  errors: FieldsError = null;
  validatedData: PropsValidated = null;
  validate(data: any): boolean {
    const errors = validateSync(data);

    if (errors.length) {
      this.errors = {};

      errors.map((error) => {
        const field = error.property;
        this.errors[field] = Object.values(error.constraints);
      });
    } else {
      this.validatedData = data;
    }

    return !errors.length;
  }
}
