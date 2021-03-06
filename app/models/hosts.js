const HOSTS = (
  "HOSTS " +
  "(" +
  "ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY," +
  "rowID INT," +
  "name VARCHAR(50)," +
  "fullname VARCHAR(255)," +
  "number INT," +
  "updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP," +
  "created TIMESTAMP DEFAULT CURRENT_TIMESTAMP," +
  "FOREIGN KEY (rowID) REFERENCES `ROWS`(ID)" +
  ") ENGINE = InnoDB;"
);

module.exports = HOSTS;
