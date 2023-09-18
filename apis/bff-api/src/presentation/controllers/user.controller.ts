import { UserControllerInterface, HttpResponse, OutputUserDto, InputFindOneUserDto } from '../contracts';

export class UserController implements UserControllerInterface {
    async findOne(input: InputFindOneUserDto): Promise<HttpResponse<OutputUserDto>> {
        try {
            return null;
        } catch (e) {
            throw e;
        }
    }

    async list(): Promise<HttpResponse<OutputUserDto[]>> {
        try {
            return null;
        } catch (e) {
            throw e;
        }
    }
}
