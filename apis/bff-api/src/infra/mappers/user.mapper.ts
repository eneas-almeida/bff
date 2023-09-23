import { UserIntegrationOutputDto } from '@/framework/integrations/contracts';
import { UserOutputDto } from '@/usecases/contracts';

export const toDesktop = (data: UserIntegrationOutputDto): UserOutputDto => ({
    id: data.id,
    name: data.name,
    document: data.document,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
});

export const toMobile = (data: UserIntegrationOutputDto): UserOutputDto => ({
    id: data.id,
    name: data.name,
    createdAt: data.createdAt,
});

export const toDesktopCollection = (data: UserIntegrationOutputDto[]): UserOutputDto[] => {
    return data.map((item) => toDesktop(item));
};

export const toMobileCollection = (data: UserIntegrationOutputDto[]): UserOutputDto[] => {
    return data.map((item) => toMobile(item));
};
