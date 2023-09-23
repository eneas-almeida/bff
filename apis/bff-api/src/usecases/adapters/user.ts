import { UserIntegrationOutputDto } from '@/framework/integrations/contracts';
import { toDesktopCollection, toMobileCollection, toDesktop, toMobile } from '@/infra/mappers/user.mapper';
import { Device, DeviceMap, UserOutputDto } from '../contracts';

export const parseUserOutputDto = (device: Device, data: UserIntegrationOutputDto): UserOutputDto => {
    const map: DeviceMap<UserOutputDto> = {
        [Device.DESKTOP]: () => toDesktop(data),
        [Device.MOBILE]: () => toMobile(data),
    };

    return (map[device] || map['DESKTOP'])();
};

export const parseUserOutputDtoCollection = (
    device: Device,
    data: UserIntegrationOutputDto[]
): UserOutputDto[] => {
    const map: DeviceMap<UserOutputDto[]> = {
        [Device.DESKTOP]: () => toDesktopCollection(data),
        [Device.MOBILE]: () => toMobileCollection(data),
    };

    return (map[device] || map['DESKTOP'])();
};
