import { Device } from './device';

interface UserGeo {
    lat: string;
    lng: string;
}

interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: UserGeo;
}

interface UserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserDesktopOutputDto {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
    company: UserCompany;
    phone: string;
    website: string;
}

export interface UserMobileOutputDto {
    id: number;
    name: string;
    username: string;
    email: string;
}

export type UserOutputDto = UserDesktopOutputDto | UserMobileOutputDto;

export interface UserUseCaseInterface {
    findOneById: (device: Device, id: number) => Promise<UserOutputDto>;
    findOneByEmail: (device: Device, email: string) => Promise<UserOutputDto>;
    list: (device: Device) => Promise<UserOutputDto[]>;
}
