import { IntegrationInterface } from '@/framework/integrations/contracts';
import { AppError } from '@/main/errors';
import { Device } from './contracts';
import { UserOutputDto, UserUseCaseInterface } from './contracts/user';
import { userOutputDtoAdapter, userOutputDtoCollectionAdapter } from './helpers';

export class UserUseCase implements UserUseCaseInterface {
    constructor(private readonly integration: IntegrationInterface) {}

    async findAll(device: Device): Promise<UserOutputDto[]> {
        const existsUsersExternals = await this.integration.users.findAll();

        if (!existsUsersExternals.length) {
            throw new AppError('User not found', 204);
        }

        return userOutputDtoCollectionAdapter(device, existsUsersExternals);
    }

    async findOneByEmail(device: Device, email: string): Promise<UserOutputDto> {
        const existsUserExternal = await this.integration.users.findOneByEmail(email);

        if (!existsUserExternal) {
            throw new AppError('User not found', 204);
        }

        return userOutputDtoAdapter(device, existsUserExternal);
    }

    async findOneById(device: Device, id: number): Promise<UserOutputDto> {
        const existsUserExternal = await this.integration.users.findOneById(id);

        if (!existsUserExternal) {
            throw new AppError('User not found', 204);
        }

        return userOutputDtoAdapter(device, existsUserExternal);
    }
}
