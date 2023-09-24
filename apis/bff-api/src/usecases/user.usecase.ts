import { IntegrationInterface } from '@/framework/integrations/contracts';
import { AppError } from '@/infra/main/errors';
import { userOutputDtoCollectionAdapter, userOutputDtoAdapter } from './helpers';
import { Device } from './contracts';
import { UserOutputDto, UserUseCaseInterface } from './contracts/user';

export class UserUseCase implements UserUseCaseInterface {
    constructor(private readonly integration: IntegrationInterface) {}

    async findOneById(device: Device, id: string): Promise<UserOutputDto> {
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

    async findOneByDocument(device: Device, document: string): Promise<UserOutputDto> {
        try {
            const existsUserExternal = await this.integration.users.findOneByDocument(document);

            if (!existsUserExternal) {
                throw new AppError('User not found', 204);
            }

            return userOutputDtoAdapter(device, existsUserExternal);
        } catch (e) {
            throw e;
        }
    }

    async list(device: Device): Promise<UserOutputDto[]> {
        const existsUsersExternals = await this.integration.users.list();

        if (!existsUsersExternals.length) {
            throw new AppError('User not found', 204);
        }

        return userOutputDtoCollectionAdapter(device, existsUsersExternals);
    }
}
