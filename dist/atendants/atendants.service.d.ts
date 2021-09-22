import { CreateAtendantDto } from './dto/create-atendant.dto';
import { UpdateAtendantDto } from './dto/update-atendant.dto';
import { PrismaService } from '../prisma.service';
export declare class AtendantsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAtendantDto: CreateAtendantDto): import(".prisma/client").Prisma.Prisma__AtendantClient<import(".prisma/client").Atendant>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Atendant[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AtendantClient<import(".prisma/client").Atendant>;
    update(id: string, updateAtendantDto: UpdateAtendantDto): import(".prisma/client").Prisma.Prisma__AtendantClient<import(".prisma/client").Atendant>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AtendantClient<import(".prisma/client").Atendant>;
}
