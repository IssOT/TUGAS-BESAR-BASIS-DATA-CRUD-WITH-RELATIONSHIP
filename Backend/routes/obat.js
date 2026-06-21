const express = require('express');
const router  = express.Router();
const Obat    = require('../models/Obat');

router.post('/', async (req, res) => {
  try {
    const obat = new Obat(req.body);
    await obat.save();
    res.status(201).json(obat);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const data = await Obat.find();
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const data = await Obat.findById(req.params.id);
  if (!data) return res.status(404).json({ error: 'Tidak ditemukan' });
  res.json(data);
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Obat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Obat.findByIdAndDelete(req.params.id);
    res.json({ message: 'Obat berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;