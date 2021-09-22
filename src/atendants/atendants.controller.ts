import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AtendantsService } from './atendants.service';
import { CreateAtendantDto } from './dto/create-atendant.dto';
import { UpdateAtendantDto } from './dto/update-atendant.dto';

@Controller('atendants')
export class AtendantsController {
  constructor(private readonly atendantsService: AtendantsService) {}

  @Post()
  create(@Body() createAtendantDto: CreateAtendantDto) {
    return this.atendantsService.create(createAtendantDto);
  }

  @Get()
  findAll() {
    return this.atendantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atendantsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAtendantDto: UpdateAtendantDto,
  ) {
    return this.atendantsService.update(id, updateAtendantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atendantsService.remove(id);
  }
}
