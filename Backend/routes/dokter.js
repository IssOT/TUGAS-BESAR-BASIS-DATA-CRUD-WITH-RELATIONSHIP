const express = require('express');
const router  = express.Router();
const Dokter  = require('../models/Dokter');
const Pasien  = require('../models/Pasien');

router.post('/', async (req, res) => {
  try {
    const dokter = new Dokter(req.body);
    await dokter.save();
    res.status(201).json(dokter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const data = await Dokter.find();
  res.json(data);
});

router.get('/:id', async (req, res) => {
  try {
    const dokter = await Dokter.findById(req.params.id);
    if (!dokter) return res.status(404).json({ error: 'Dokter tidak ditemukan' });
    const pasien = await Pasien.find({ dokterPemeriksa: req.params.id });
    res.json({ dokter, pasien });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Dokter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Dokter.findByIdAndDelete(req.params.id);
    res.json({ message: 'Dokter berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;