"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionsModule = void 0;
const common_1 = require("@nestjs/common");
const connections_service_1 = require("./connections.service");
const connections_controller_1 = require("./connections.controller");
let ConnectionsModule = class ConnectionsModule {
};
ConnectionsModule = __decorate([
    (0, common_1.Module)({
        controllers: [connections_controller_1.ConnectionsController],
        providers: [connections_service_1.ConnectionsService]
    })
], ConnectionsModule);
exports.ConnectionsModule = ConnectionsModule;
//# sourceMappingURL=connections.module.js.map