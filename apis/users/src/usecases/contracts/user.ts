interface UserGeo {
    lat: string;
    lng: string;
}

interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: UserGeo;
}

interface UserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserOutputDto {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
    company: UserCompany;
    phone: string;
    website: string;
}
