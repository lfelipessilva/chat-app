import { CreateCallDto } from './dto/create-call.dto';
import { UpdateCallDto } from './dto/update-call.dto';
export declare class CallsService {
    create(createCallDto: CreateCallDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCallDto: UpdateCallDto): string;
    remove(id: number): string;
}
