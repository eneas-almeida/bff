import { Device, HealthzOutputDto, UserOutputDto } from '@/usecases/contracts';

export type HttpResponse<T = any> = {
    statusCode: number;
    body: T;
};

export interface HealthzControllerInterface {
    healthz: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface UserControllerInterface {
    findOne: (device: Device, userId: string) => Promise<HttpResponse<UserOutputDto>>;
    list: (device: Device) => Promise<HttpResponse<UserOutputDto[]>>;
}
