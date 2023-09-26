import { deviceAdapter } from './device-adapter.helper';

export const dataFindOneById = (headers: any, params: any) => ({
    device: deviceAdapter(headers.device),
    id: params.id,
});

export const dataFindOneByEmail = (headers: any, params: any) => ({
    device: deviceAdapter(headers.device),
    email: params.email,
});

export const dataFindAll = (headers: any) => ({
    device: deviceAdapter(headers.device),
});
