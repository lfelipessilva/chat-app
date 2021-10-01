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
exports.CallsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const net_1 = require("net");
const calls_service_1 = require("./calls.service");
const create_call_dto_1 = require("./dto/create-call.dto");
const update_call_dto_1 = require("./dto/update-call.dto");
let CallsGateway = class CallsGateway {
    constructor(callsService) {
        this.callsService = callsService;
    }
    create(client, createCallDto) {
        return this.callsService.create(client, createCallDto);
    }
    findAll() {
        return this.callsService.findAll();
    }
    findOne(id) {
        return this.callsService.findOne(id);
    }
    update(updateCallDto) {
        return this.callsService.update(updateCallDto.id, updateCallDto);
    }
    remove(id) {
        return this.callsService.remove(id);
    }
};
__decorate([
    (0, websockets_1.SubscribeMessage)('createCall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [net_1.Socket, create_call_dto_1.CreateCallDto]),
    __metadata("design:returntype", void 0)
], CallsGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllCalls'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CallsGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOneCall'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CallsGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateCall'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_call_dto_1.UpdateCallDto]),
    __metadata("design:returntype", void 0)
], CallsGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removeCall'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CallsGateway.prototype, "remove", null);
CallsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [calls_service_1.CallsService])
], CallsGateway);
exports.CallsGateway = CallsGateway;
//# sourceMappingURL=calls.gateway.js.map