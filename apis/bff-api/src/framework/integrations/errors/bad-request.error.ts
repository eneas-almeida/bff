export class BadRequestError extends Error {
    constructor(public readonly message: string, public readonly statusCode: number = 500) {
        super(message);
    }
}
