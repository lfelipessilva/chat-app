import { CreateAtendantDto } from './dto/create-atendant.dto';
import { UpdateAtendantDto } from './dto/update-atendant.dto';
import { PrismaService } from '../prisma.service';
export declare class AtendantsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAtendantDto: CreateAtendantDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateAtendantDto: UpdateAtendantDto): any;
    remove(id: string): any;
}
