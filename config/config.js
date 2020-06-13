module.exports = {
    development: {
        dialect: "mysql",
        storage: "./db.development.sqlite"
    },
    test: {
        dialect: "mysql",
        storage: ":memory:"
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        use_env_variable: 'DATABASE_URL'
    }
};