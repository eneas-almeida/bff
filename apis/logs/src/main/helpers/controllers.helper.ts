interface CreatedAt {
    $gte?: Date;
    $lte?: Date;
}

export const queryBuild = (req: any) => {
    const fnQuery = (search: string, initDate: string, endDate: string): any => {
        const customFields = [];

        const betweenDates: CreatedAt = {};

        if (initDate) betweenDates.$gte = new Date(initDate);
        if (endDate) betweenDates.$lte = new Date(endDate);

        if (initDate || endDate) {
            customFields.push({ createdAt: { ...betweenDates } });
        }

        const regex = new RegExp(search, 'i');

        return {
            $and: [
                { $or: [{ request: { $regex: regex } }, { response: { $regex: regex } }] },
                ...customFields,
            ],
        };
    };

    const fnLimit = (limit: string): number => {
        return limit ? parseInt(limit) : 10;
    };

    const fnSkip = (page: string, limit: string): number => {
        return page ? (parseInt(page) - 1) * parseInt(limit) : 0;
    };

    const { q, initDate, endDate, limit, page } = req;

    return {
        query: fnQuery(q, initDate, endDate),
        limit: fnLimit(limit),
        skip: fnSkip(page, limit),
    };
};
