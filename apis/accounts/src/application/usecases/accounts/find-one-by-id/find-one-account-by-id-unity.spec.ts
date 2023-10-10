import { AccountFactory } from '@/domain/accounts';
import { FindOneAccountByIdUseCase } from './find-one-account-by-id.usecase';

const MockRepository = () => {
    const accounts = [
        AccountFactory.createWithId('101010', 'tiago1@gmail.com', 'key101010'),
        AccountFactory.createWithId('202020', 'tiago2@gmail.com', 'key202020'),
        AccountFactory.createWithId('303030', 'tiago3@gmail.com', 'key303030'),
    ];

    return {
        create: jest.fn(),
        filter: jest.fn(),
        findOneById: jest.fn().mockResolvedValue(accounts[1]),
        findOneByEmail: jest.fn(),
    };
};

describe('Find one account by id (unity test)', () => {
    test('Should return a account unity', async () => {
        const findOneAccountByIdUseCase = new FindOneAccountByIdUseCase(MockRepository());

        const output = await findOneAccountByIdUseCase.execute('202020');

        expect(output.data.email).toEqual('tiago@gmail.com');
    });
});
