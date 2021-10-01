/// <reference types="node" />
import { Socket } from 'net';
import { CallsService } from './calls.service';
import { CreateCallDto } from './dto/create-call.dto';
import { UpdateCallDto } from './dto/update-call.dto';
export declare class CallsGateway {
    private readonly callsService;
    constructor(callsService: CallsService);
    create(client: Socket, createCallDto: CreateCallDto): import(".prisma/client").Prisma.Prisma__CallClient<import(".prisma/client").Call>;
    findAll(): string;
    findOne(id: string): string;
    update(updateCallDto: UpdateCallDto): string;
    remove(id: string): string;
}
