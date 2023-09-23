import { Device, UserOutputDto } from '@/usecases/contracts';
import { UserUseCase } from '@/usecases/user.usecase';
import { HttpResponse, UserControllerInterface } from '../contracts';
import { ok } from '../helpers';

export class UserController implements UserControllerInterface {
    constructor(private readonly userUseCase: UserUseCase) {}

    async findOne(device: Device, userId: string): Promise<HttpResponse<UserOutputDto>> {
        try {
            return ok(await this.userUseCase.findOne(device, userId));
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
