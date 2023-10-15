import { LogsFactory } from '@/domain/logs';
import { FindOneLogByIdUseCase } from './find-one-log-by-id.usecase';

const MockRepository = () => {
    const logs = [
        LogsFactory.create('users-api', 'key101010', 'SUCCESS', '300', '{}', '{}'),
        LogsFactory.create('users-api', 'key202020', 'FAILED', '300', '{}', '{}'),
        LogsFactory.create('users-api', 'key303030', 'SUCCESS', '300', '{}', '{}'),
    ];

    return {
        create: jest.fn(),
        filter: jest.fn(),
        findOneById: jest.fn().mockResolvedValue(logs[1]),
        findOneByKey: jest.fn(),
    };
};

describe('Find one log by id (unity test)', () => {
    test('Should return a log unity', async () => {
        const findOneLogByIdUseCase = new FindOneLogByIdUseCase(MockRepository());

        const output = await findOneLogByIdUseCase.execute('202020');

        expect(output.data.origin).toEqual('rabbit');
    });
});
