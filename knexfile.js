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

  production: {
    client: 'postgresql',
    connection: 'postgres://smgxtmbhjxiufs:4cf985dbcc59800b7a59b18d5256bb5c2444d22274557b6f2788fd09d399d6f7@ec2-18-215-111-67.compute-1.amazonaws.com:5432/dar3png1l6apo2?ssl=true',
  }

};
