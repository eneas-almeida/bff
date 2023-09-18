import { HttpResponse } from '.';

export interface OutputHealthzDto {
    name: string;
    version: string;
}

export interface HealthzControllerInterface {
    healthz: () => Promise<HttpResponse<OutputHealthzDto>>;
}
