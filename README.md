# SinaMedis — Clinic Management Information System

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/IssOT/TUGAS-BESAR-BASIS-DATA-CRUD-WITH-RELATIONSHIP)
[![Node.js Version](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-green?logo=mongodb)](https://www.mongodb.com/)

Aplikasi CRUD berbasis web untuk manajemen klinik medis yang dibangun menggunakan arsitektur **RESTful API** dengan **Node.js** (Express.js) dan **MongoDB** sebagai basis data NoSQL. Project ini mengimplementasikan relasi antar-dokumen menggunakan Mongoose ODM.

---

## 👤 Identitas Pengembang

* **Nama:** Ivan Sigit Santoso [cite: 2]
* **NIM:** 4.33.25.1.11 [cite: 2]
* **Program Studi:** D4 Teknologi Rekayasa Komputer 
* **Institusi:** Politeknik Negeri Semarang

---

## 📁 Struktur Folder

```text
sinamedis/
├── models/          # Mongoose schema dan model untuk setiap collection
│   ├── Dokter.js
│   ├── Pasien.js
│   └── Obat.js
├── routes/          # Express router yang mendefinisikan endpoint REST API
│   ├── dokter.js
│   ├── pasien.js
│   └── obat.js
├── server.js        # Entry point aplikasi, koneksi database, & middleware
└── index.html       # Frontend berbasis Vanilla JS dengan Fetch API

http://googleusercontent.com/immersive_entry_chip/0

4. **Jalankan Frontend:**
   * Buka file `index.html` menggunakan ekstensi **Live Server** di VS Code.
   * Akses aplikasi melalui browser pada alamat default: `http://127.0.0.1:8080`

---

## 📝 Catatan Tambahan

* Mongoose dikonfigurasi menggunakan parameter `{ collection: 'NamaCollection' }` demi mencegah fitur *auto-pluralize* bawaan MongoDB.
* CORS (*Cross-Origin Resource Sharing*) sudah dikonfigurasi secara aman agar backend (`:3000`) mau menerima permintaan dari domain frontend (`:8080`).
