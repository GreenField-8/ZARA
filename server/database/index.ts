import mysql, { Connection } from "mysql2";
import mysqlConfig from "./config";

const connection: Connection = mysql.createConnection(mysqlConfig);
connection.connect((err:any) => {
  if (err) {
    console.error(err);
  } else {
    console.log("DB connected!!");
  }
});

export default connection;
