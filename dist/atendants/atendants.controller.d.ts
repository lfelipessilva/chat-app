import { AtendantsService } from './atendants.service';
import { CreateAtendantDto } from './dto/create-atendant.dto';
import { UpdateAtendantDto } from './dto/update-atendant.dto';
export declare class AtendantsController {
    private readonly atendantsService;
    constructor(atendantsService: AtendantsService);
    create(createAtendantDto: CreateAtendantDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateAtendantDto: UpdateAtendantDto): any;
    remove(id: string): any;
}
