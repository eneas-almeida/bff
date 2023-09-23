import { OrderIntegration, UserIntegration } from '@/framework/integrations';
import { IntegrationInterface } from '@/framework/integrations/contracts';
import { AxiosHttpClient } from '@/infra/httpclients';
import { UserControllerInterface } from '@/presentation/contracts';
import { UserController } from '@/presentation/controllers';
import { UserUseCase } from '@/usecases/user.usecase';

export const MakeUserController = async (): Promise<UserControllerInterface> => {
    const axiosInstance = new AxiosHttpClient().getInstance();

    const integration: IntegrationInterface = {
        orders: new OrderIntegration(axiosInstance),
        users: new UserIntegration(axiosInstance),
    };

    const userUseCase = new UserUseCase(integration);

    return new UserController(userUseCase);
};
