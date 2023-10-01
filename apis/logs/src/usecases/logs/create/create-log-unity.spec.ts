import { CreateLogUseCase } from './create-log.usecase';

const MockRepository = () => ({
    create: jest.fn(),
    filter: jest.fn(),
    findOneById: jest.fn(),
    findOneByKey: jest.fn(),
});

describe('Create log (unity test)', () => {
    test('Should return a log unity', async () => {
        const createLogUseCase = new CreateLogUseCase(MockRepository());

        const input = {
            origin: 'users',
            key: 'key101010',
            request: '{}',
            response: '{}',
        };

        const output = await createLogUseCase.execute(input);

        expect(output.data.origin).toEqual('users');
    });
});
