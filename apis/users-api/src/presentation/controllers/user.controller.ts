import { UserOutputDto } from '@/usecases/contracts';
import { FindAllUsersUseCase, FindOneUserByEmailUseCase, FindOneUserByIdUseCase } from '@/usecases/user';
import { HttpResponse, UserControllerInterface } from '../contracts';
import { ok } from '../helpers';

export class UserController implements UserControllerInterface {
    constructor(
        private readonly findAllUsersUseCase: FindAllUsersUseCase,
        private readonly findOneUserByEmailUseCase: FindOneUserByEmailUseCase,
        private readonly findOneUserByIdUseCase: FindOneUserByIdUseCase
    ) {}

    async findAll(): Promise<HttpResponse<UserOutputDto[]>> {
        try {
            return ok(await this.findAllUsersUseCase.execute());
        } catch (e) {
            throw e;
        }
    }

    async findOneByEmail(email: string): Promise<HttpResponse<UserOutputDto>> {
        try {
            return ok(await this.findOneUserByEmailUseCase.execute(email));
        } catch (e) {
            throw e;
        }
    }

    async findOneById(id: number): Promise<HttpResponse<UserOutputDto>> {
        try {
            return ok(await this.findOneUserByIdUseCase.execute(id));
        } catch (e) {
            throw e;
        }
    }
}
