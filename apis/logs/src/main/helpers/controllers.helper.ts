export const queryBuild = (req: any) => {
    const fnSearchInFields = (search: string, fields: string): any => {
        if (search && fields) {
            const fieldsPart = fields.replace(/\s/g, '').split(',');

            const regex = new RegExp(search, 'i');

            const orFields = fieldsPart.map((field: string) => ({ [field]: { $regex: regex } }));

            return { $or: orFields };
        }

        return null;
    };

    const fnConvertDateToUTC = (date: string): Date => {
        const strParts = date.split('T');

        let strDate = null;

        if (strParts.length === 2) {
            strDate = new Date(date).toISOString();
        } else {
            strDate = new Date(`${date} 00:00:00`).toISOString();
        }

        return new Date(strDate);
    };

    const fnBetweenDates = (initDate: string, endDate: string): any => {
        const betweenDates: { $gte?: Date; $lte?: Date } = {};

        const dt = fnConvertDateToUTC(initDate);

        if (initDate) betweenDates.$gte = new Date(initDate);
        if (endDate) betweenDates.$lte = new Date(endDate);

        if (initDate || endDate) {
            return { createdAt: { ...betweenDates } };
        }

        return null;
    };

    const fnQuery = (search: string, fields: string, initDate: string, endDate: string): any => {
        const customFields = [];

        const searchInFields = fnSearchInFields(search, fields);
        if (searchInFields) customFields.push(searchInFields);

        const betweenDates = fnBetweenDates(initDate, endDate);
        if (betweenDates) customFields.push(betweenDates);

        if (!customFields.length) return null;

        return {
            $and: [...customFields],
        };
    };

    const fnLimit = (limit: string): number => {
        return limit ? parseInt(limit) : 10;
    };

    const fnSkip = (page: string, limit: string): number => {
        return page ? (parseInt(page) - 1) * parseInt(limit) : 0;
    };

    const { search, fields, initDate, endDate, limit, page } = req;

    return {
        query: fnQuery(search, fields, initDate, endDate),
        limit: fnLimit(limit),
        skip: fnSkip(page, limit),
    };
};
