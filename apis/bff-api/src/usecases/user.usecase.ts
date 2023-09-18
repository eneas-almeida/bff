import { IntegrationInterface } from '@/framework/integrations/contracts';
import { AppError } from '@/infra/main/errors';
import { toDesktop, toMobile } from '@/infra/mappers/user.mapper';
import { DeviceEnum, DeviceMap, OutputUserDto, UserUseCaseInterface } from './contracts';

export class UserUseCase implements UserUseCaseInterface {
    constructor(private readonly integration: IntegrationInterface) {}

    async findOne(device: DeviceEnum, userId: string): Promise<OutputUserDto> {
        try {
            const existsUser = await this.integration.users.findOne(userId);

            if (!existsUser) {
                throw new AppError('User not found', 204);
            }

            const map: DeviceMap = {
                [DeviceEnum.MOBILE]: () => toMobile(existsUser),
                [DeviceEnum.DESKTOP]: () => toDesktop(existsUser),
            };

            return map[device] ? map[device]() : map['DESKTOP']();
        } catch (e) {
            throw e;
        }
    }

    async list(device: string): Promise<OutputUserDto[]> {
        const existUser = await this.integration.users.list();

        return null;
    }
}
