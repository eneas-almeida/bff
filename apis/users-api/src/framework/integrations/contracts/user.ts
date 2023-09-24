interface UserIntegrationGeo {
    lat: string;
    lng: string;
}

interface UserIntegrationAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: UserIntegrationGeo;
}

interface UserIntegrationCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserIntegrationOutputDto {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserIntegrationAddress;
    company: UserIntegrationCompany;
    phone: string;
    website: string;
}

export interface UserIntegrationInterface {
    findAll(): Promise<UserIntegrationOutputDto[]>;
    findOneByEmail(email: string): Promise<UserIntegrationOutputDto | null>;
    findOneById(id: number): Promise<UserIntegrationOutputDto | null>;
}
