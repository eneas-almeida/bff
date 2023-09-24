import { UserTipycodeIntegration } from '@/framework/integrations';
import { AxiosHttpClient } from '@/infra/httpclients';
import { UserControllerInterface } from '@/presentation/contracts';
import { UserController } from '@/presentation/controllers';
import { FindAllUsersUseCase, FindOneUserByEmailUseCase } from '@/usecases/user';
import { FindOneUserByIdUseCase } from '@/usecases/user/find-one-by-id/find-one-user-by-id.usecase';

export const MakeUserControllerContainer = async (): Promise<UserControllerInterface> => {
    const axiosInstance = new AxiosHttpClient().getInstance();

    const userTipycodeIntegration = new UserTipycodeIntegration(axiosInstance);

    const findAllUsersUseCase = new FindAllUsersUseCase(userTipycodeIntegration);
    const findOneUserByEmailUseCase = new FindOneUserByEmailUseCase(userTipycodeIntegration);
    const findOneUserByIdUseCase = new FindOneUserByIdUseCase(userTipycodeIntegration);

    return new UserController(findAllUsersUseCase, findOneUserByEmailUseCase, findOneUserByIdUseCase);
};
