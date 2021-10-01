import { ConnectionsService } from './connections.service';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
export declare class ConnectionsController {
    private readonly connectionsService;
    constructor(connectionsService: ConnectionsService);
    create(createConnectionDto: CreateConnectionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateConnectionDto: UpdateConnectionDto): string;
    remove(id: string): string;
}
