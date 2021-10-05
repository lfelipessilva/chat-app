import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ConnectionsService {
  constructor(private prisma: PrismaService) {}

  async create(createConnectionData: CreateConnectionDto) {
    try {
      const secondUser = await this.findOne(createConnectionData.second_userId);

      if (secondUser !== null) {
        throw new NotFoundException();
      }

      return await this.prisma.connection.create({
        data: createConnectionData,
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
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
