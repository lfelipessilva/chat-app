import { Injectable } from '@nestjs/common';
import { CreateAtendantDto } from './dto/create-atendant.dto';
import { UpdateAtendantDto } from './dto/update-atendant.dto';
import { PrismaService } from '../prisma.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AtendantsService {
  constructor(private prisma: PrismaService) {}

  create(createAtendantDto: CreateAtendantDto) {
    createAtendantDto.id = uuid();
    return this.prisma.atendant.create({ data: createAtendantDto });
  }

  findAll() {
    return this.prisma.atendant.findMany({});
  }

  findOne(id: string) {
    return this.prisma.atendant.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateAtendantDto: UpdateAtendantDto) {
    return this.prisma.atendant.update({
      where: {
        id: id,
      },
      data: updateAtendantDto,
    });
  }

  remove(id: string) {
    return this.prisma.atendant.delete({
      where: {
        id: id,
      },
    });
  }
}
