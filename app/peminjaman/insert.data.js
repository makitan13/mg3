const sql = require("../models/db");
sql.query("INSERT INTO peminjaman VALUES (NULL, 'title', 'desc', 'perpustakaan.png', current_timestamp());", (err, res) => {
 if (err) {
 console.log(err);
 } else {
 console.log("Data peminjaman berhasil ditambahkan: " + res.affectedRows
);
 }
});
