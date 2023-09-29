db = db.getSiblingDB('loggers');

db.createUser({
    user: 'logger',
    pwd: 'logger',
    roles: [{ role: 'readWrite', db: 'loggers' }],
});
