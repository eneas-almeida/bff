db = db.getSiblingDB('logs');

db.createUser({
    user: 'log',
    pwd: 'log',
    roles: [{ role: 'readWrite', db: 'logs' }],
});
