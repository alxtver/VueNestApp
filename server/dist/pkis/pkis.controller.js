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
exports.PkisController = void 0;
const common_1 = require("@nestjs/common");
const create_pki_dto_1 = require("./dto/create-pki.dto");
const update_pki_dto_1 = require("./dto/update-pki.dto");
let PkisController = class PkisController {
    getAll() {
        return 'getAll';
    }
    getOne(id) {
        return 'getOne ' + id;
    }
    create(createPkiDto) {
        console.log(createPkiDto);
        return 'PKI create!';
    }
    remove(id) {
        return 'PKI remove';
    }
    update(updatePkiDto, id) {
        console.log(updatePkiDto);
        return 'Update ' + id;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PkisController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], PkisController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pki_dto_1.CreatePkiDto]),
    __metadata("design:returntype", String)
], PkisController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PkisController.prototype, "remove", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_pki_dto_1.UpdatePkiDto, String]),
    __metadata("design:returntype", void 0)
], PkisController.prototype, "update", null);
PkisController = __decorate([
    common_1.Controller('pkis')
], PkisController);
exports.PkisController = PkisController;
//# sourceMappingURL=pkis.controller.js.map