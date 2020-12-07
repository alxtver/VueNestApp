import { CreatePkiDto } from './dto/create-pki.dto';
import { UpdatePkiDto } from './dto/update-pki.dto';
export declare class PkisController {
    getAll(): string;
    getOne(id: string): string;
    create(createPkiDto: CreatePkiDto): string;
    remove(id: string): string;
    update(updatePkiDto: UpdatePkiDto, id: string): string;
}
