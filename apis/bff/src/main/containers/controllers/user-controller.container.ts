import { PhotoIntegration, UserIntegration } from '@/framework/integrations';
import { GlobalIntegrationInterface } from '@/framework/integrations/contracts';
import { AxiosHttpClient } from '@/infra/httpclients';
import { UserControllerInterface } from '@/presentation/contracts';
import { UserController } from '@/presentation/controllers';
import { UserUseCase } from '@/usecases/user.usecase';

export const MakeUserControllerContainer = async (): Promise<UserControllerInterface> => {
    const axiosInstance = new AxiosHttpClient().getInstance();

    const globalIntegration: GlobalIntegrationInterface = {
        users: new UserIntegration(axiosInstance),
        photos: new PhotoIntegration(axiosInstance),
    };

    const userUseCase = new UserUseCase(globalIntegration);

    return new UserController(userUseCase);
};
