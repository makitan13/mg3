const sql = require("../models/db");
sql.query("DROP TABLE peminjaman", (err, res) => {
 if (err) {console.log(err);
 } else {
 console.log("Table peminjaman berhasil dihapus");
 }
});