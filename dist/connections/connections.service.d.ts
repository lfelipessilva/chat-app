import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ConnectionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createConnectionDto: CreateConnectionDto): Promise<import(".prisma/client").Connection>;
    findAll(): Promise<import(".prisma/client").Connection[]>;
    findOne(id: string): Promise<import(".prisma/client").Connection>;
    update(id: string, updateConnectionDto: UpdateConnectionDto): Promise<import(".prisma/client").Connection>;
    remove(id: string): Promise<import(".prisma/client").Connection>;
}
