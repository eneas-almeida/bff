import { CreateLogUseCase } from './create-log.usecase';

const input = {
    origin: 'users',
    key: 'key101010',
    type: 'SUCCESS',
    code: '1000',
    request: '{}',
    response: '{}',
};

const MockRepository = () => ({
    create: jest.fn().mockReturnValue(Promise.resolve(input)),
    filter: jest.fn(),
    findOneById: jest.fn(),
    findOneByKey: jest.fn(),
});

describe('Create log (unity test)', () => {
    test('Should return a log unity', async () => {
        const createLogUseCase = new CreateLogUseCase(MockRepository());

        const output = await createLogUseCase.execute(input);

        expect(output.data.origin).toEqual('users');
    });
});
