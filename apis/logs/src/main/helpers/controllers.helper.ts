import moment from 'moment-timezone';

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

    const fnDateAdapter = (date: string, flag: string): Date => {
        const strDateParts = date.split(date.at(10));

        if (strDateParts.length === 1) {
            date =
                flag === 'start'
                    ? moment(date).format('YYYY-MM-DD').toString().concat('T02:59:59.999Z')
                    : moment(date).add(1, 'day').format('YYYY-MM-DD').toString().concat('T03:00:00.000Z');
        }

        return moment.utc(date).toDate();
    };

    const fnBetweenDates = (startDate: string, endDate: string): any => {
        const betweenDates: {
            $gte?: Date;
            $lte?: Date;
        } = {};

        if (startDate) betweenDates.$gte = fnDateAdapter(startDate, 'start');
        if (endDate) betweenDates.$lte = fnDateAdapter(endDate, 'end');

        if (startDate || endDate) {
            return { createdAt: { ...betweenDates } };
        }

        return null;
    };

    const fnQuery = (search: string, fields: string, startDate: string, endDate: string): any => {
        const customFields = [];

        const searchInFields = fnSearchInFields(search, fields);
        if (searchInFields) customFields.push(searchInFields);

        const betweenDates = fnBetweenDates(startDate, endDate);
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

    const { search, fields, startDate, endDate, limit, page } = req;

    return {
        query: fnQuery(search, fields, startDate, endDate),
        limit: fnLimit(limit),
        skip: fnSkip(page, limit),
    };
};
