import { HttpResponse } from '.';

export interface InputFindOneUserDto {
    device: string;
    id: string;
}

export interface OutputUserDto {
    id: string;
    document: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserControllerInterface {
    findOne: (input: InputFindOneUserDto) => Promise<HttpResponse<OutputUserDto>>;
    list: () => Promise<HttpResponse<OutputUserDto[]>>;
}
