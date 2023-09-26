import { PhotoIntegrationInterface } from './photo';
import { UserIntegrationInterface } from './user';

export interface GlobalIntegrationInterface {
    users?: UserIntegrationInterface;
    photos?: PhotoIntegrationInterface;
}
