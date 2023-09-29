import { UserOutputDto } from '@/usecases/contracts';
import { FindAllUsersUseCase, FindOneUserByEmailUseCase, FindOneUserByIdUseCase } from '@/usecases/users';
import { HttpResponse, UserControllerInterface } from '../contracts';
import { ok } from '../helpers';

export class UserController implements UserControllerInterface {
    constructor(
        private readonly findAllUsersUseCase: FindAllUsersUseCase,
        private readonly findOneUserByEmailUseCase: FindOneUserByEmailUseCase,
        private readonly findOneUserByIdUseCase: FindOneUserByIdUseCase
    ) {}

    async findAll(): Promise<HttpResponse<UserOutputDto[]>> {
        return ok(await this.findAllUsersUseCase.execute());
    }

    async findOneByEmail(email: string): Promise<HttpResponse<UserOutputDto>> {
        return ok(await this.findOneUserByEmailUseCase.execute(email));
    }

    async findOneById(id: number): Promise<HttpResponse<UserOutputDto>> {
        return ok(await this.findOneUserByIdUseCase.execute(id));
    }
}
