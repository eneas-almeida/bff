import { LogsFactory } from '@/domain/logs';
import { FindOneLogByKeyUseCase } from './find-one-log-by-key.usecase';

const MockRepository = () => {
    const logs = [
        LogsFactory.create('users-api', 'key101010', 'SUCCESS', '300', '{}', '{}'),
        LogsFactory.create('users-api', 'key202020', 'FAILED', '300', '{}', '{}'),
        LogsFactory.create('users-api', 'key303030', 'SUCCESS', '300', '{}', '{}'),
    ];

    return {
        create: jest.fn(),
        filter: jest.fn(),
        findOneById: jest.fn(),
        findOneByKey: jest.fn().mockResolvedValue(logs[1]),
        deleteAll: jest.fn(),
    };
};

describe('Find one log by key (unity test)', () => {
    test('Should return a log unity', async () => {
        const findOneLogByKeyUseCase = new FindOneLogByKeyUseCase(MockRepository());

        const output = await findOneLogByKeyUseCase.execute('202020');

        expect(output.data.origin).toEqual('rabbit');
    });
});
