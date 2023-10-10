import { AccountFactory } from '@/domain/accounts';
import { FilterAccountsUseCase } from './filter-accounts.usecase';

const MockRepository = () => {
    const accounts = [
        AccountFactory.create('tiago1@gmail.com', 'key101010'),
        AccountFactory.create('tiago2@gmail.com', 'key202020'),
        AccountFactory.create('tiago3@gmail.com', 'key303030'),
    ];

    return {
        create: jest.fn(),
        filter: jest.fn().mockReturnValue(Promise.resolve(accounts)),
        findOneById: jest.fn(),
        findOneByEmail: jest.fn(),
    };
};

describe('Filter accounts (unity test)', () => {
    test('Should return a account unity', async () => {
        const filterAccountUseCase = new FilterAccountsUseCase(MockRepository());

        const output = await filterAccountUseCase.execute(null);

        expect(output.data.length).toEqual(3);
    });
});
