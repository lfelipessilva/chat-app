import { CallsService } from './calls.service';
import { CreateCallDto } from './dto/create-call.dto';
import { UpdateCallDto } from './dto/update-call.dto';
export declare class CallsGateway {
    private readonly callsService;
    constructor(callsService: CallsService);
    create(createCallDto: CreateCallDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateCallDto: UpdateCallDto): string;
    remove(id: number): string;
}
