import { CreateCallDto } from './dto/create-call.dto';
import { UpdateCallDto } from './dto/update-call.dto';
import { PrismaService } from '../prisma.service';
export declare class CallsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(client: any, createCallDto: CreateCallDto): import(".prisma/client").Prisma.Prisma__CallClient<import(".prisma/client").Call>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCallDto: UpdateCallDto): string;
    remove(id: string): string;
}
