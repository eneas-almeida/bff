import { Notification } from '../notification';

export interface LoggerEntityInterface {
    get id(): string;
    get origin(): string;
    get key(): string;
    get request(): string;
    get response(): string;
    get createdAt(): Date;
    get notification(): Notification;

    setId(value: string): void;
    setOrigin(value: string): void;
    setKey(value: string): void;
    setRequest(value: string): void;
    setResponse(value: string): void;
    setCreatedAt(value: Date): void;
    validate(): void;
}
