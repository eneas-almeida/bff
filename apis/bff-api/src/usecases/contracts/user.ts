export interface UserDesktopOutputDto {
    id: string;
    document: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserMobileOutputDto {
    id: string;
    name: string;
    createdAt: Date;
}

export type UserOutputDto = UserDesktopOutputDto | UserMobileOutputDto;

export interface UserUseCaseInterface {
    findOneById: (device: string, id: string) => Promise<UserOutputDto>;
    findOneByDocument: (device: string, document: string) => Promise<UserOutputDto>;
    list: (device: string) => Promise<UserOutputDto[]>;
}
