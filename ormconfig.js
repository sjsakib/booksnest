module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'booksnest',
  username: 'postgres',
  password: 'docker',
  entities: [__dirname + '/dist/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/dist/migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
  synchronize: false,
  migrationsRun: true,
  logging: true,
};
