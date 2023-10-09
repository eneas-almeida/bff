import { LogFactory } from '@/domain/logs';
import { FilterLogsUseCase } from './filter-logs.usecase';

const MockRepository = () => {
    const logs = [
        LogFactory.create('users-api', 'key101010', '{}', '{}'),
        LogFactory.create('users-api', 'key202020', '{}', '{}'),
        LogFactory.create('users-api', 'key303030', '{}', '{}'),
    ];

    return {
        create: jest.fn(),
        filter: jest.fn().mockReturnValue(Promise.resolve(logs)),
        findOneById: jest.fn(),
        findOneByKey: jest.fn(),
    };
};

describe('Filter logs (unity test)', () => {
    test('Should return a log unity', async () => {
        const filterLogUseCase = new FilterLogsUseCase(MockRepository());

        const output = await filterLogUseCase.execute(null);

        expect(output.data.length).toEqual(3);
    });
});
