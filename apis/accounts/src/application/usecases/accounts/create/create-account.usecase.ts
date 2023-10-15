import {
    AccountsCommonsInterface,
    AccountsCreateInputDto,
    AccountsCustomOutputDto,
    AccountsOutputDto,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { AccountMapper } from '@/application/mappers';

export class CreateAccountUseCase {
    constructor(private readonly commons: AccountsCommonsInterface) {}

    async execute(input: AccountsCreateInputDto): Promise<AccountsCustomOutputDto<AccountsOutputDto>> {
        try {
            let entity = AccountMapper.dtoToEntity(input);

            entity = await this.commons.repositories.accounts.create(entity);

            const output = AccountMapper.entityToDto(entity);

            delete input.body.password;

            try {
                this.commons.integrations.logs.create({
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

            this.commons.integrations.logs.create({
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
