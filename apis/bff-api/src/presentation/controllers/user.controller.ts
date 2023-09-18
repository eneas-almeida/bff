import { OutputUserDto } from '@/usecases/contracts';
import { UserUseCase } from '@/usecases/user.usecase';
import { HttpResponse, UserControllerInterface } from '../contracts';
import { ok } from '../helpers';

export class UserController implements UserControllerInterface {
    constructor(private readonly userUseCase: UserUseCase) {}

    async findOne(device: string, id: string): Promise<HttpResponse<OutputUserDto>> {
        try {
            return ok(await this.userUseCase.findOne(device, id));
        } catch (e) {
            throw e;
        }
    }

    async list(device: string): Promise<HttpResponse<OutputUserDto[]>> {
        try {
            return ok(await this.userUseCase.list(device));
        } catch (e) {
            throw e;
        }
    }
}
