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
exports.Authenticate = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let Authenticate = class Authenticate {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    use(req, res, next) {
        const headerToken = req.headers.authorization;
        if (!headerToken) {
            return res.status(401).send({ error: 'No token provided' });
        }
        const [scheme, token] = headerToken.split(' ');
        if (!token) {
            return res.status(401).send({ error: 'Token error' });
        }
        try {
            const user = this.jwtService.verify(token);
            req.user = user.id;
            return next();
        }
        catch (error) {
            return res.status(401).send({ error: 'Invalid token' });
        }
    }
};
Authenticate = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], Authenticate);
exports.Authenticate = Authenticate;
//# sourceMappingURL=auth.middleware.js.map