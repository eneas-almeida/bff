import { PhotoIntegrationInterface } from './photo';
import { UserIntegrationInterface } from './user';

export * from './photo';
export * from './user';

export interface IntegrationInterface {
    users?: UserIntegrationInterface;
    photos?: PhotoIntegrationInterface;
}
