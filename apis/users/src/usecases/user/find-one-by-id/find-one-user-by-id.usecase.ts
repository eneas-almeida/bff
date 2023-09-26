import { UserIntegrationInterface } from '@/framework/integrations/contracts';
import { AppError } from '@/main/errors';
import { toUserOutputDto } from '@/main/mappers';
import { UserOutputDto } from '@/usecases/contracts';

export class FindOneUserByIdUseCase {
    constructor(private readonly integration: UserIntegrationInterface) {}

    async execute(id: number): Promise<UserOutputDto> {
        const existsExternalUser = await this.integration.findOneById(id);

        if (!existsExternalUser) {
            throw new AppError('No users found', 204);
        }

        return toUserOutputDto(existsExternalUser);
    }
}
