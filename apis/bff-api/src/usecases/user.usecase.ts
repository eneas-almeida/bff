import { IntegrationInterface } from '@/framework/integrations/contracts';
import { AppError } from '@/infra/main/errors';
import { getUserCollectionData, getUserSingleData } from './adapters';
import { Device } from './contracts';
import { UserOutputDto, UserUseCaseInterface } from './contracts/user';

export class UserUseCase implements UserUseCaseInterface {
    constructor(private readonly integration: IntegrationInterface) {}

    async findOneById(device: Device, id: string): Promise<UserOutputDto> {
        try {
            const existsUser = await this.integration.users.findOneById(id);

            if (!existsUser) {
                throw new AppError('User not found', 204);
            }

            return getUserSingleData(device, existsUser);
        } catch (e) {
            throw e;
        }
    }

    async findOneByDocument(device: Device, document: string): Promise<UserOutputDto> {
        try {
            const existsUser = await this.integration.users.findOneByDocument(document);

            if (!existsUser) {
                throw new AppError('User not found', 204);
            }

            return getUserSingleData(device, existsUser);
        } catch (e) {
            throw e;
        }
    }

    async list(device: Device): Promise<UserOutputDto[]> {
        const existsUser = await this.integration.users.list();

        if (!existsUser.length) {
            throw new AppError('User not found', 204);
        }

        return getUserCollectionData(device, existsUser);
    }
}
