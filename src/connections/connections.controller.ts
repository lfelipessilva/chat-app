import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ConnectionsService } from './connections.service';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { v4 as uuid } from 'uuid';
@Controller('connections')
export class ConnectionsController {
  constructor(private readonly connectionsService: ConnectionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createConnectionData: CreateConnectionDto,
    @Request() req,
  ) {
    createConnectionData.id = uuid();
    createConnectionData.first_userId = req.user.id;
    return await this.connectionsService.create(createConnectionData);
  }

  @Get()
  findAll() {
    return this.connectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connectionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConnectionDto: UpdateConnectionDto,
  ) {
    return this.connectionsService.update(id, updateConnectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.connectionsService.remove(id);
  }
}
