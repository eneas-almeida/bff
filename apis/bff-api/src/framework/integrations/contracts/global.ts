import { OrderIntegrationInterface } from './order';
import { UserIntegrationInterface } from './user';

export interface IntegrationInterface {
    users?: UserIntegrationInterface;
    orders?: OrderIntegrationInterface;
}
