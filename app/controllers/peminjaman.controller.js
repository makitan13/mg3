const Book = require("../models/peminjaman.model");
//Mengambil semua data peminjaman
exports.findAll = (req, res) => {
 Peminjaman.getAll((err, data) => {
 if (err) {
 res.status(500).send({
 message:
 err.message || "Terjadi kesalahan"
 });
 } else res.send(data);
 });
};