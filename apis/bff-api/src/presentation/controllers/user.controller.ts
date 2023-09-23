import { Device, UserOutputDto } from '@/usecases/contracts';
import { UserUseCase } from '@/usecases/user.usecase';
import { HttpResponse, UserControllerInterface } from '../contracts';
import { ok } from '../helpers';

export class UserController implements UserControllerInterface {
    constructor(private readonly userUseCase: UserUseCase) {}

    async findOneById(device: Device, id: string): Promise<HttpResponse<UserOutputDto>> {
        try {
            return ok(await this.userUseCase.findOneById(device, id));
        } catch (e) {
            throw e;
        }
    }

    async findOneByDocument(device: Device, document: string): Promise<HttpResponse<UserOutputDto>> {
        try {
            return ok(await this.userUseCase.findOneByDocument(device, document));
        } catch (e) {
            throw e;
        }
    }

    async list(device: Device): Promise<HttpResponse<UserOutputDto[]>> {
        try {
            return ok(await this.userUseCase.list(device));
        } catch (e) {
            throw e;
        }
    }
}
