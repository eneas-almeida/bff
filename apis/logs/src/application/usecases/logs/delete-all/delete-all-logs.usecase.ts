import { LogsRepositoryInterface } from '@/application/contracts';

export class DeleteAllLogsUseCase {
    constructor(private readonly logsRepository: LogsRepositoryInterface) {}

    async execute(): Promise<void> {
        await this.logsRepository.deleteAll();
    }
}
