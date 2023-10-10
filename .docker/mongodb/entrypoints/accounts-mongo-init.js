db = db.getSiblingDB('accounts');

db.createUser({
    user: 'account',
    pwd: 'account',
    roles: [{ role: 'readWrite', db: 'accounts' }],
});
