import moment from 'moment-timezone';

export const buildCustomFilter = (queryRequest: any) => {
    const fnSearchInFields = (search: string, fields: string): any => {
        if (!search || search.length <= 3) return null;

        let fieldsParts = fields ? fields.replaceAll(' ', '').split(',') : null;

        const fieldsToSearch = ['origin', 'key', 'request', 'response'];

        if (!fieldsParts || (fieldsParts.length === 1 && fieldsParts[0] === '*')) {
            return {
                $or: fieldsToSearch.map((field) => ({ [field]: { $regex: new RegExp(search, 'i') } })),
            };
        }

        const containsInvalidField = !fieldsParts.every((field) =>
            fieldsToSearch.includes(field.toLowerCase())
        );

        if (containsInvalidField) return null;

        return {
            $or: fieldsParts.map((field) => ({ [field]: { $regex: new RegExp(search, 'i') } })),
        };
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

        return startDate || endDate ? { createdAt: { ...betweenDates } } : null;
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

    const fnSort = (sort: string): any => {
        if (!sort) return null;

        const strParts = sort.replaceAll(' ', '').split(',');

        let sortParts = null,
            error = false;

        const aux: any = {};

        for (const strPart of strParts) {
            sortParts = strPart.split(':');

            if (sortParts.length !== 2) {
                error = true;
                break;
            }

            const [name, order] = sortParts;

            if (!['asc', 'desc'].includes(order.toLowerCase())) {
                error = true;
                break;
            }

            aux[name] = order.toLowerCase() === 'asc' ? 1 : -1;
        }

        return error ? null : aux;
    };

    const { search, fields, sort, startDate, endDate, limit, page } = queryRequest;

    return {
        query: fnQuery(search, fields, startDate, endDate),
        sort: fnSort(sort),
        limit: fnLimit(limit),
        skip: fnSkip(page, limit),
        page: page,
    };
};
