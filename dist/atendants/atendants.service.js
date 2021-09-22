"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtendantsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const uuid_1 = require("uuid");
let AtendantsService = class AtendantsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createAtendantDto) {
        createAtendantDto.id = (0, uuid_1.v4)();
        return this.prisma.atendant.create({ data: createAtendantDto });
    }
    findAll() {
        return this.prisma.atendant.findMany({});
    }
    findOne(id) {
        return this.prisma.atendant.findUnique({
            where: {
                id: id,
            },
        });
    }
    update(id, updateAtendantDto) {
        return this.prisma.atendant.update({
            where: {
                id: id,
            },
            data: updateAtendantDto,
        });
    }
    remove(id) {
        return this.prisma.atendant.delete({
            where: {
                id: id,
            },
        });
    }
};
AtendantsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AtendantsService);
exports.AtendantsService = AtendantsService;
//# sourceMappingURL=atendants.service.js.map