import { PhotoIntegration, UserIntegration } from '@/framework/integrations';
import { IntegrationInterface } from '@/framework/integrations/contracts';
import { AxiosHttpClient } from '@/infra/httpclients';
import { UserControllerInterface } from '@/presentation/contracts';
import { UserController } from '@/presentation/controllers';
import { UserUseCase } from '@/usecases/user.usecase';

export const MakeUserControllerContainer = async (): Promise<UserControllerInterface> => {
    const axiosInstance = new AxiosHttpClient().getInstance();

    const integration: IntegrationInterface = {
        users: new UserIntegration(axiosInstance),
        photos: new PhotoIntegration(axiosInstance),
    };

    const userUseCase = new UserUseCase(integration);

    return new UserController(userUseCase);
};
