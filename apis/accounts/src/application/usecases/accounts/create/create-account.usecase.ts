import {
    AccountCreateInputDto,
    AccountCustomOutputDto,
    AccountOutputDto,
    AccountRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { AccountMapper } from '@/application/mappers';
import { LogsIntegrationInterface } from '@/framework/integrations/contracts';

export class CreateAccountUseCase {
    constructor(
        private readonly accountsRepository: AccountRepositoryInterface,
        private readonly logsIntegration: LogsIntegrationInterface
    ) {}

    async execute(input: AccountCreateInputDto): Promise<AccountCustomOutputDto<AccountOutputDto>> {
        try {
            let entity = AccountMapper.dtoToEntity(input);

            entity = await this.accountsRepository.create(entity);

            const outputDto = AccountMapper.entityToDto(entity);

            try {
                this.logsIntegration.create({
                    origin: 'accounts',
                    key: input.xRequest,
                    type: 'SUCESS',
                    code: '900',
                    request: JSON.stringify(input),
                    response: JSON.stringify(outputDto),
                });
            } catch (err) {
                throw err;
            }

            return customOutputDto(outputDto);
        } catch (err) {
            try {
                this.logsIntegration.create({
                    origin: 'accounts',
                    key: input.xRequest,
                    type: 'ERROR',
                    code: '190',
                    request: JSON.stringify(input),
                    response: JSON.stringify(err),
                });
            } catch (_err) {
                return;
            }
        }
    }
}
