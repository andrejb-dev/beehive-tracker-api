// Proper way to organize an sql provider:
//
// - have all sql files for Users in ./sql/users
// - have all sql files for Products in ./sql/products
// - have your sql provider module as ./sql/index.js

const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

// Helper for linking to external query files:
function sql(file) {
    const fullPath = path.join(__dirname, file); // generating full path;
    return new QueryFile(fullPath, { minify: true });
}

module.exports = {
    addresses: {
        insert: sql('addresses/insert.sql'),
        select: sql('addresses/select.sql'),
        update: sql('addresses/update.sql'),
        delete: sql('addresses/delete.sql')
    },
    users: {
        insert: sql('users/insert.sql'),
        select: sql('users/select.sql'),
        update: sql('users/update.sql'),
        delete: sql('users/delete.sql'),
    },
    yards: {
        insert: sql('yards/insert.sql'),
        select: sql('yards/select.sql'),
        selectAll: sql('yards/select-all.sql'),
        update: sql('yards/update.sql'),
        delete: sql('yards/delete.sql')
    },
    hives: {
        insert: sql('hives/insert.sql'),
        select: sql('hives/select.sql'),
        selectAll: sql('hives/select-all.sql'),
        update: sql('hives/update.sql'),
        delete: sql('hives/delete.sql')
    },
    inspections: {
        insert: sql('inspections/insert.sql'),
        select: sql('inspections/select.sql'),
        selectAll: sql('inspections/select-all.sql'),
        update: sql('inspections/update.sql'),
        delete: sql('inspections/delete.sql')
    },
    todos: {
        insert: sql('todos/insert.sql'),
        select: sql('todos/select.sql'),
        selectAll: sql('todos/select-all.sql'),
        update: sql('todos/update.sql'),
        delete: sql('todos/delete.sql')
    },
    harvests: {
        insert: sql('harvests/insert.sql'),
        select: sql('harvests/select.sql'),
        selectAll: sql('harvests/select-all.sql'),
        update: sql('harvests/update.sql'),
        delete: sql('harvests/delete.sql')
    }
};