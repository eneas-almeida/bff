import { CreateAccountUseCase } from './create-account.usecase';

const input = {
    email: 'tiago@gmail.com',
    password: 'password101010',
    request: '{}',
    response: '{}',
};

const MockRepository = () => ({
    create: jest.fn().mockReturnValue(Promise.resolve(input)),
    filter: jest.fn(),
    findOneById: jest.fn(),
    findOneByEmail: jest.fn(),
});

describe('Create account (unity test)', () => {
    test('Should return a account unity', async () => {
        const createAccountUseCase = new CreateAccountUseCase(MockRepository());

        const output = await createAccountUseCase.execute(input);

        expect(output.data.email).toEqual('tiago@gmail.com');
    });
});
