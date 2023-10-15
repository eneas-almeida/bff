import { CreateAccountUseCase } from './create-account.usecase';

const input = {
    body: {
        email: 'tiago@gmail.com',
        password: 'password101010',
    },
};

const MockRepository = () => ({
    create: jest.fn().mockReturnValue(Promise.resolve(input)),
    filter: jest.fn(),
    findOneById: jest.fn(),
    findOneByEmail: jest.fn(),
    deleteAll: jest.fn(),
});

const MockLogs = () => ({
    create: jest.fn(),
});

const MockCommons = () => ({
    repositories: {
        accounts: MockRepository(),
    },
    integrations: {
        logs: MockLogs(),
    },
});

describe('Create account (unity test)', () => {
    test('Should return a account unity', async () => {
        const createAccountUseCase = new CreateAccountUseCase(MockCommons());

        const output = await createAccountUseCase.execute(input);

        expect(output.data.email).toEqual('tiago@gmail.com');
    });
});
