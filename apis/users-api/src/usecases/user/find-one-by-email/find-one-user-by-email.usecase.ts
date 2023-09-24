import { UserIntegrationInterface } from '@/framework/integrations/contracts';
import { AppError } from '@/infra/main/errors';
import { toUserOutputDto } from '@/infra/main/mappers';
import { UserOutputDto } from '@/usecases/contracts';

export class FindOneUserByEmailUseCase {
    constructor(private readonly integration: UserIntegrationInterface) {}

    async execute(email: string): Promise<UserOutputDto> {
        try {
            const existsExternalUser = await this.integration.findOneByEmail(email);

            if (!existsExternalUser) {
                throw new AppError('No users found', 204);
            }

            return toUserOutputDto(existsExternalUser);
        } catch (e) {
            throw e;
        }
    }
}
