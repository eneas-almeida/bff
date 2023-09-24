import { Device, UserOutputDto } from '@/usecases/contracts';
import { UserUseCase } from '@/usecases/user.usecase';
import { HttpResponse, UserControllerInterface } from '../contracts';
import { ok } from '../helpers';

export class UserController implements UserControllerInterface {
    constructor(private readonly userUseCase: UserUseCase) {}

    async findOneById(device: Device, id: number): Promise<HttpResponse<UserOutputDto>> {
        try {
            return ok(await this.userUseCase.findOneById(device, id));
        } catch (e) {
            throw e;
        }
    }

    async findOneByEmail(device: Device, email: string): Promise<HttpResponse<UserOutputDto>> {
        try {
            return ok(await this.userUseCase.findOneByEmail(device, email));
        } catch (e) {
            throw e;
        }
    }

    async findAll(device: Device): Promise<HttpResponse<UserOutputDto[]>> {
        try {
            return ok(await this.userUseCase.findAll(device));
        } catch (e) {
            throw e;
        }
    }
}
