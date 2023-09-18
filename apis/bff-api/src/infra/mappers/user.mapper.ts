import { OutputUserIntegrationDto } from '@/framework/integrations/contracts';
import { OutputUserDto } from '@/usecases/contracts';

export const toMobile = (output: OutputUserIntegrationDto): OutputUserDto => ({
    id: output.id,
    name: output.name,
    createdAt: output.createdAt,
});

export const toDesktop = (output: OutputUserIntegrationDto): OutputUserDto => ({
    id: output.id,
    name: output.name,
    document: output.document,
    createdAt: output.createdAt,
    updatedAt: output.updatedAt,
});
