const { Pool } = require("pg");

const client = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://axfrbcdpolxawn:ade630f9f902b4925557e049d60bfd4e9c05ca6f349f71d7f2073334e43f83db@ec2-52-45-183-77.compute-1.amazonaws.com:5432/d3e8fkd7iop5ms",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = client;
