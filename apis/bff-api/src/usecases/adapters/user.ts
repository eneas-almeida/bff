import { UserIntegrationOutputDto } from '@/framework/integrations/contracts';
import { toDesktopCollection, toMobileCollection, toDesktop, toMobile } from '@/infra/mappers/user.mapper';
import { Device, DeviceMap, UserOutputDto } from '../contracts';

export const getUserSingleData = (device: Device, data: UserIntegrationOutputDto): UserOutputDto => {
    const map: DeviceMap<UserOutputDto> = {
        [Device.DESKTOP]: () => toDesktop(data),
        [Device.MOBILE]: () => toMobile(data),
    };

    return map[device] ? map[device]() : map['DESKTOP']();
};

export const getUserCollectionData = (device: Device, data: UserIntegrationOutputDto[]): UserOutputDto[] => {
    const map: DeviceMap<UserOutputDto[]> = {
        [Device.DESKTOP]: () => toDesktopCollection(data),
        [Device.MOBILE]: () => toMobileCollection(data),
    };

    return map[device] ? map[device]() : map['DESKTOP']();
};
