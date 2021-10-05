import { ConnectionsService } from './connections.service';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
export declare class ConnectionsController {
    private readonly connectionsService;
    constructor(connectionsService: ConnectionsService);
    create(createConnectionDto: CreateConnectionDto, req: any): any;
    findAll(): Promise<import(".prisma/client").Connection[]>;
    findOne(id: string): Promise<import(".prisma/client").Connection>;
    update(id: string, updateConnectionDto: UpdateConnectionDto): Promise<import(".prisma/client").Connection>;
    remove(id: string): Promise<import(".prisma/client").Connection>;
}
