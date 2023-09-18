import { OutputHealthzDto, OutputUserDto } from '@/usecases/contracts';

export type HttpResponse<T = any> = {
    statusCode: number;
    body: T;
};

export interface HealthzControllerInterface {
    healthz: () => Promise<HttpResponse<OutputHealthzDto>>;
}

export interface UserControllerInterface {
    findOne: (device: string, id: string) => Promise<HttpResponse<OutputUserDto>>;
    list: (device: string) => Promise<HttpResponse<OutputUserDto[]>>;
}
