import { Socket } from 'socket.io';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessagesGateway {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    create(createMessageDto: CreateMessageDto, client: Socket): Promise<CreateMessageDto>;
    findAll(): string;
    findOne(id: string): string;
    update(updateMessageDto: UpdateMessageDto): UpdateMessageDto;
    remove(id: string): string;
}
