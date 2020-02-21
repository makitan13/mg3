module.exports = app => {
    const peminjaman = require("../controllers/peminjaman.controller");
    // cara mengakses gambar
   http://polibatam.ac.id/img/perpustakaan.png
    // Mengambil semua data
    app.get("/api/peminjaman", peminjaman.findAll);
    // Mengambil data buku yang memiliki id = id
    app.get("/api/peminjaman/:id", peminjaman.findOne);
    // Membuat buku baru
    app.post("/api/peminjaman", peminjaman.create);
    // Mengubah data buku yang memiliki id = id
    app.put("/api/peminjaman/:id", peminjaman.update);
    // Hapus data buku yang memiliki id = id
    app.delete("/api/peminjaman/:id", peminjaman.delete);
    // Hapus seluruh data
    app.delete("/api/peminjaman", peminjaman.deleteAll);
   };
   