const sql = require("./db.js");
const Peminjaman = function (peminjaman) {
 this.title = peminjaman.title;
 this.description = Peminjaman.description; 
 this.images = Peminjaman.images;
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
};// Mengambil buku yang memiliki id = BookId
Peminjaman.findById = (id, result) => {
    sql.query(`SELECT * FROM peminjaman WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log(res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};
// Membuat data buku baru
Peminjaman.create = (newPeminjaman, result) => {
    console.log(newPeminjaman);
    sql.query("INSERT INTO peminjaman (title, description, images) VALUES (?,?,?)",[newPeminjaman.title, newPeminjaman.description, newPeminjaman.images], (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log(res);
        console.log("buat buku: ", { id: res.insertId, ...newPeminjaman});
        result(null, { id: res.insertId, ...newPeminjaman });
    });
};
// Mengupdate data buku yang memiliki id = id
Peminjaman.updateById = ( id, Peminjaman, result) => {
    sql.query("UPDATE peminjaman SET title = ?, description = ?, images = ? WHERE id = ?",[Peminjaman.title, Peminjaman.description, Peminjaman.images, id],(err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("update buku: ", { id: id, ...Peminjaman });
        result(null, { id: id, ...Peminjaman });
    }
    );
};
// Menghapus buku yang memiliki id = id
Peminjaman.remove = (id, result) => {
    sql.query("DELETE FROM peminjaman WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Book with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("hapus buku dengan id: ", id);
        result(null, res);
    });
};
// Menghapus semua buku
Peminjaman.removeAll = result => {
    sql.query("DELETE FROM peminjaman", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`Menghapus ${res.affectedRows} buku`);
        result(null, res);
    });
};

module.exports = Book;