import { PartialType } from '@nestjs/mapped-types';
import { CreateAtendantDto } from './create-atendant.dto';

export class UpdateAtendantDto extends PartialType(CreateAtendantDto) {}
