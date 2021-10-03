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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async authenticate(data) {
        const user = await this.usersService.findByEmail(data.email);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        if (data.password != user.password) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { id: user.id };
        user.password = undefined;
        const headerToken = req.headers.authorization;
        if (!headerToken) {
            return res.status(401).send({ error: 'No token provided' });
        }
        const [scheme, token] = headerToken.split(' ');
        if (!token) {
            return res.status(401).send({ error: 'Token error' });
        }
        try {
            const user = jwt.verify(token);
            req.user = user.id;
            return next();
        }
        catch (error) {
            return res.status(401).send({ error: 'Invalid token' });
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map