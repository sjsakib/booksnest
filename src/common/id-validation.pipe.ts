import { PipeTransform, BadRequestException } from '@nestjs/common';

export class IdValidationPipe implements PipeTransform {
  uuidPattern = /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/;

  transform(value: string) {
    if (!this.uuidPattern.test(value)) {
      throw new BadRequestException(`Invalid ID`);
    }
    return value;
  }
}
