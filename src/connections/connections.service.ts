import { Injectable } from '@nestjs/common';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { PrismaService } from 'src/prisma.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ConnectionsService {
  constructor(private prisma: PrismaService) {}

  async create(createConnectionDto: CreateConnectionDto) {
    createConnectionDto.id = uuid();
    //return await this.prisma.connection.create({ data: createConnectionDto });
    return 'worked';
  }

  async findAll() {
    return await this.prisma.connection.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.connection.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateConnectionDto: UpdateConnectionDto) {
    return await this.prisma.connection.update({
      where: {
        id: id,
      },
      data: updateConnectionDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.connection.delete({
      where: {
        id: id,
      },
    });
  }
}
