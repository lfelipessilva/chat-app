"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAtendantDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_atendant_dto_1 = require("./create-atendant.dto");
class UpdateAtendantDto extends (0, mapped_types_1.PartialType)(create_atendant_dto_1.CreateAtendantDto) {
}
exports.UpdateAtendantDto = UpdateAtendantDto;
//# sourceMappingURL=update-atendant.dto.js.map