import { PipeTransform, BadRequestException } from '@nestjs/common';
import { uuidPattern } from './uuid-pattern.constant';

export class IdValidationPipe implements PipeTransform {
  uuidPattern = uuidPattern;

  transform(value: string) {
    if (!this.uuidPattern.test(value)) {
      throw new BadRequestException(`Invalid ID`);
    }
    return value;
  }
}
