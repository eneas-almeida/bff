import { UserIntegrationOutputDto } from '@/framework/integrations/contracts';
import { UserOutputDto } from '@/usecases/contracts';

export const toUserOutputDto = (data: UserIntegrationOutputDto): UserOutputDto => ({
    id: data.id,
    name: data.name,
    username: data.username,
    email: data.email,
    address: {
        street: data.address.street,
        suite: data.address.suite,
        city: data.address.city,
        zipcode: data.address.zipcode,
        geo: {
            lat: data.address.geo.lat,
            lng: data.address.geo.lng,
        },
    },
    company: {
        name: data.company.name,
        catchPhrase: data.company.catchPhrase,
        bs: data.company.bs,
    },
    phone: data.phone,
    website: data.website,
});

export const toUserOutputDtoCollection = (data: UserIntegrationOutputDto[]): UserOutputDto[] => {
    return data.map((item) => toUserOutputDto(item));
};
