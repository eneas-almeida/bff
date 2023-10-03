import { LogFilterQueryBuildDto } from '@/usecases/contracts';

export const queryBuild = (input: any): LogFilterQueryBuildDto => {
    const { q, page, limit, order, orderBy, initDate, endDate } = input;

    const output: LogFilterQueryBuildDto = {
        skip: page ? (parseInt(page) - 1) * parseInt(limit) : 0,
        limit: limit ? parseInt(limit) : 10,
    };

    if (q) output.q = q;
    if (order) output.order = order;
    if (orderBy) output.orderBy = orderBy;
    if (initDate) output.createdAt = { $gte: new Date(initDate) };
    if (endDate) output.createdAt = { ...output.createdAt, $lte: new Date(endDate) };

    return output;
};
