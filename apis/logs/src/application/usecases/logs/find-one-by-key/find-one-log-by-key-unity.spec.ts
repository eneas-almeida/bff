import { LogFactory } from '@/domain/logs';
import { FindOneLogByKeyUseCase } from './find-one-log-by-key.usecase';

const MockRepository = () => {
    const logs = [
        LogFactory.createWithId('101010', 'users', 'key101010', '{}', '{}'),
        LogFactory.createWithId('202020', 'rabbit', 'key202020', '{}', '{}'),
        LogFactory.createWithId('303030', 'photos', 'key303030', '{}', '{}'),
    ];

    return {
        create: jest.fn(),
        filter: jest.fn(),
        findOneById: jest.fn(),
        findOneByKey: jest.fn().mockResolvedValue(logs[1]),
    };
};

describe('Find one log by key (unity test)', () => {
    test('Should return a log unity', async () => {
        const findOneLogByKeyUseCase = new FindOneLogByKeyUseCase(MockRepository());

        const output = await findOneLogByKeyUseCase.execute('202020');

        expect(output.data.origin).toEqual('rabbit');
    });
});
