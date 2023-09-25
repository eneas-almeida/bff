import { AppError, BadRequestError } from '@/infra/main/errors';

export const checkError = (err: any) => {
    if (err instanceof ReferenceError || err instanceof TypeError || err instanceof SyntaxError) {
        throw new Error(err.message);
    }

    const codes = ['ECONNREFUSED', 'ECONNRESET', 'ECONNABORTED', 'ENOTFOUND', 'ETIMEDOUT'];

    if (err.code && codes.includes(err.code)) {
        throw new BadRequestError(err.message, 400);
    }

    if (err.response && err.response.status === 404) {
        throw new AppError('Not found', 204);
    }
};
