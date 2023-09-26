import { HealthzOutputDto, UserOutputDto } from '@/usecases/contracts';

export type HttpResponse<T = any> = {
    statusCode: number;
    body: T;
};

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface UserControllerInterface {
    findAll: () => Promise<HttpResponse<UserOutputDto[]>>;
    findOneByEmail: (email: string) => Promise<HttpResponse<UserOutputDto>>;
    findOneById: (id: number) => Promise<HttpResponse<UserOutputDto>>;
}
