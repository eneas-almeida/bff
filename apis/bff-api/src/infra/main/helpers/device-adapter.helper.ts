import { Device } from '@/usecases/contracts';

export const deviceAdapter = (device: string | string[]): Device => {
    const map: any = {
        desktop: Device.DESKTOP,
        mobile: Device.MOBILE,
    };

    const deviceParsed = typeof device === 'string' ? device.toLowerCase() : device[0];

    return map[deviceParsed] || map.desktop;
};
