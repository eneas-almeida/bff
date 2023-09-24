import { GlobalIntegrationInterface } from '@/framework/integrations/contracts';
import { AppError } from '@/infra/main/errors';
import { userOutputDtoCollectionAdapter, userOutputDtoAdapter } from './helpers';
import { Device } from './contracts';
import { UserOutputDto, UserUseCaseInterface } from './contracts/user';

export class UserUseCase implements UserUseCaseInterface {
    constructor(private readonly integration: GlobalIntegrationInterface) {}

    async findOneById(device: Device, id: number): Promise<UserOutputDto> {
        try {
            const existsUserExternal = await this.integration.users.findOneById(id);

            if (!existsUserExternal) {
                throw new AppError('User not found', 204);
            }

            return userOutputDtoAdapter(device, existsUserExternal);
        } catch (e) {
            throw e;
        }
    }

    async findOneByEmail(device: Device, email: string): Promise<UserOutputDto> {
        try {
            const existsUserExternal = await this.integration.users.findOneByEmail(email);

            if (!existsUserExternal) {
                throw new AppError('User not found', 204);
            }

            return userOutputDtoAdapter(device, existsUserExternal);
        } catch (e) {
            throw e;
        }
    }

    async list(device: Device): Promise<UserOutputDto[]> {
        console.log('listxxxxxxxxxxxxxxxxxxxxxxx');
        const existsUsersExternals = await this.integration.users.list();

        if (!existsUsersExternals.length) {
            throw new AppError('User not found', 204);
        }

        return userOutputDtoCollectionAdapter(device, existsUsersExternals);
    }
}
