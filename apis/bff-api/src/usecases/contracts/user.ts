export interface UserDesktopOutputDto {
    id: string;
    document: number;
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
    findOne: (device: string, userId: string) => Promise<UserOutputDto>;
    list: (device: string) => Promise<UserOutputDto[]>;
}
