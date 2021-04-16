// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgre://localhost/evb-test-sp'
  },
  test: {
    client: 'pg',
    connection: 'postgre://localhost/test-evb-test-sp'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'evb-test-sp',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
