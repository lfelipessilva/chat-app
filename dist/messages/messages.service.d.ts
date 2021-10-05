import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessagesService {
    create(createMessageDto: CreateMessageDto): CreateMessageDto;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMessageDto: UpdateMessageDto): UpdateMessageDto;
    remove(id: string): string;
}
