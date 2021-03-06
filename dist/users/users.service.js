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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        createUserDto.id = (0, uuid_1.v4)();
        const hashedPass = await bcrypt.hash(createUserDto.password, 12);
        createUserDto.password = hashedPass;
        return await this.prisma.user.create({ data: createUserDto });
    }
    async findAll() {
        return await this.prisma.user.findMany();
    }
    async findOne(id) {
        return await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
    }
    async findByEmail(email) {
        return await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });
    }
    async update(id, updateUserDto) {
        return await this.prisma.user.update({
            where: {
                id: id,
            },
            data: updateUserDto,
        });
    }
    async remove(id) {
        return await this.prisma.user.delete({
            where: {
                id: id,
            },
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map