import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "MySQLJuan",
  database: "blog_db",
  connectionLimit: 10,
});

export default pool.promise();
