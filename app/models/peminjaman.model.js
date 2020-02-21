const sql = require("./db.js");
const Peminjaman = function (peminjaman) {
 this.title = peminjaman.title;
 this.description = Peminjaman.description; this.images = Peminjaman.images;
};
//Mengambil semua data buku
Peminjaman.getAll = result => {
 sql.query("SELECT * FROM peminjaman", (err, res) => {
 if (err) {
 console.log("error: ", err);
 result(null, err);
 return;
 }
 console.log("result: ", res);
 result(null, res);
 });
};
module.exports = Peminjaman;
