import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { CallsService } from './calls.service';
import { CreateCallDto } from './dto/create-call.dto';
import { UpdateCallDto } from './dto/update-call.dto';

@WebSocketGateway()
export class CallsGateway {
  constructor(private readonly callsService: CallsService) {}

  @SubscribeMessage('createCall')
  create(@MessageBody() createCallDto: CreateCallDto) {
    return this.callsService.create(createCallDto);
  }

  @SubscribeMessage('findAllCalls')
  findAll() {
    return this.callsService.findAll();
  }

  @SubscribeMessage('findOneCall')
  findOne(@MessageBody() id: number) {
    return this.callsService.findOne(id);
  }

  @SubscribeMessage('updateCall')
  update(@MessageBody() updateCallDto: UpdateCallDto) {
    return this.callsService.update(updateCallDto.id, updateCallDto);
  }

  @SubscribeMessage('removeCall')
  remove(@MessageBody() id: number) {
    return this.callsService.remove(id);
  }
}
