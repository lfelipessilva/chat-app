import { AtendantsService } from './atendants.service';
import { CreateAtendantDto } from './dto/create-atendant.dto';
import { UpdateAtendantDto } from './dto/update-atendant.dto';
export declare class AtendantsController {
    private readonly atendantsService;
    constructor(atendantsService: AtendantsService);
    create(createAtendantDto: CreateAtendantDto): import(".prisma/client").Prisma.Prisma__AtendantClient<import(".prisma/client").Atendant>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Atendant[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AtendantClient<import(".prisma/client").Atendant>;
    update(id: string, updateAtendantDto: UpdateAtendantDto): import(".prisma/client").Prisma.Prisma__AtendantClient<import(".prisma/client").Atendant>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AtendantClient<import(".prisma/client").Atendant>;
}
