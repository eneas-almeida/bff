import { Notification } from './notification';

describe('Unit testss for notifications', () => {
    it('should create errors', () => {
        const notification = new Notification();

        const error = {
            message: 'error message',
            context: 'logger',
        };

        notification.addError(error);

        expect(notification.messages('logger')).toBe('logger: error message,');

        const error2 = {
            message: 'error message2',
            context: 'logger',
        };

        notification.addError(error2);

        expect(notification.messages('logger')).toBe('logger: error message,logger: error message2,');

        const error3 = {
            message: 'error message3',
            context: 'order',
        };
        notification.addError(error3);

        expect(notification.messages('logger')).toBe('logger: error message,logger: error message2,');
        expect(notification.messages()).toBe(
            'logger: error message,logger: error message2,order: error message3,'
        );
    });

    it('should check if notification has at least one error', () => {
        const notification = new Notification();
        const error = {
            message: 'error message',
            context: 'logger',
        };
        notification.addError(error);

        expect(notification.hasErrors()).toBe(true);
    });

    it('should get all errors props', () => {
        const notification = new Notification();
        const error = {
            message: 'error message',
            context: 'logger',
        };
        notification.addError(error);

        expect(notification.getErrors()).toEqual([error]);
    });
});
