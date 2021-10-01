import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
export declare class ConnectionsService {
    create(createConnectionDto: CreateConnectionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConnectionDto: UpdateConnectionDto): string;
    remove(id: number): string;
}
