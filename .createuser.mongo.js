db.createUser({ 
    user: "api",
    pwd: "apipwd",
    roles:[{role: 'readWrite', db:"notes"}],
});