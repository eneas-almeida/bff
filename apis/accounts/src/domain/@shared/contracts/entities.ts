import { Notification } from '..';

export interface AccountEntityInterface {
    get id(): string;
    get email(): string;
    get password(): string;
    get createdAt(): Date;
    get updatedAt(): Date;
    get notification(): Notification;

    setId(value: string): void;
    setEmail(value: string): void;
    setPassword(value: string): void;
    setCreatedAt(value: Date): void;
    setUpdatedAt(value: Date): void;
    validate(): void;
}
