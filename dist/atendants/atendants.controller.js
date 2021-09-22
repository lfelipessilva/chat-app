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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtendantsController = void 0;
const common_1 = require("@nestjs/common");
const atendants_service_1 = require("./atendants.service");
const create_atendant_dto_1 = require("./dto/create-atendant.dto");
const update_atendant_dto_1 = require("./dto/update-atendant.dto");
let AtendantsController = class AtendantsController {
    constructor(atendantsService) {
        this.atendantsService = atendantsService;
    }
    create(createAtendantDto) {
        return this.atendantsService.create(createAtendantDto);
    }
    findAll() {
        return this.atendantsService.findAll();
    }
    findOne(id) {
        return this.atendantsService.findOne(id);
    }
    update(id, updateAtendantDto) {
        return this.atendantsService.update(id, updateAtendantDto);
    }
    remove(id) {
        return this.atendantsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_atendant_dto_1.CreateAtendantDto]),
    __metadata("design:returntype", void 0)
], AtendantsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AtendantsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AtendantsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_atendant_dto_1.UpdateAtendantDto]),
    __metadata("design:returntype", void 0)
], AtendantsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AtendantsController.prototype, "remove", null);
AtendantsController = __decorate([
    (0, common_1.Controller)('atendants'),
    __metadata("design:paramtypes", [atendants_service_1.AtendantsService])
], AtendantsController);
exports.AtendantsController = AtendantsController;
//# sourceMappingURL=atendants.controller.js.map