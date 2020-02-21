module.exports = app => {
    const peminjaman = require("../controllers/peminjaman.controller");
    // cara mengakses gambar
   http://polibatam.ac.id/img/perpustakaan.png
    // Mengambil semua data
    app.get("/api/peminjaman", peminjaman.findAll);
   };