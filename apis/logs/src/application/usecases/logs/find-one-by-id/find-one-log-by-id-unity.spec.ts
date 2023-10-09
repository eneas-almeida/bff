import { LogFactory } from '@/domain/logs';
import { FindOneLogByIdUseCase } from './find-one-log-by-id.usecase';

const MockRepository = () => {
    const logs = [
        LogFactory.createWithId('101010', 'users', 'key101010', '{}', '{}'),
        LogFactory.createWithId('202020', 'rabbit', 'key202020', '{}', '{}'),
        LogFactory.createWithId('303030', 'photos', 'key303030', '{}', '{}'),
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
