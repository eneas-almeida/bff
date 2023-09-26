import { Device, HealthzOutputDto, UserOutputDto } from '@/usecases/contracts';

export type HttpResponse<T = any> = {
    statusCode: number;
    body: T;
};

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface UserControllerInterface {
    findAll: (device: Device) => Promise<HttpResponse<UserOutputDto[]>>;
    findOneByEmail: (device: Device, email: string) => Promise<HttpResponse<UserOutputDto>>;
    findOneById: (device: Device, id: number) => Promise<HttpResponse<UserOutputDto>>;
}
