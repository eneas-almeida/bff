import {
    AccountsCreateInputDto,
    AccountsCustomOutputDto,
    AccountsOutputDto,
    AccountsRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { AccountMapper } from '@/application/mappers';
import { LogsIntegrationInterface } from '@/framework/integrations/contracts';

export class CreateAccountUseCase {
    constructor(
        private readonly accountsRepository: AccountsRepositoryInterface,
        private readonly logsIntegration: LogsIntegrationInterface
    ) {}

    async execute(input: AccountsCreateInputDto): Promise<AccountsCustomOutputDto<AccountsOutputDto>> {
        try {
            let entity = AccountMapper.dtoToEntity(input);

            entity = await this.accountsRepository.create(entity);

            const output = AccountMapper.entityToDto(entity);

            delete input.body.password;

            try {
                this.logsIntegration.create({
                    origin: 'accounts',
                    key: input.headers?.key,
                    type: 'SUCCESS',
                    code: '900',
                    request: JSON.stringify(input),
                    response: JSON.stringify(output),
                });
            } finally {
                return customOutputDto(output);
            }
        } catch (err) {
            delete input.body.password;

            this.logsIntegration.create({
                origin: 'accounts',
                key: input.headers?.key,
                type: 'FAILED',
                code: '190',
                request: JSON.stringify(input),
                response: err.toString(),
            });

            throw new Error(err.message);
        }
    }
}
