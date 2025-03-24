import express from 'express';
import FraudApp from '../models/FraudApp.js';

const router = express.Router();

router.post('/add-fraud-app', async (req, res) => {
  try {
    const {
      app_name,
      developer,
      category,
      risk_level,
      reported_on
    } = req.body;

    const newApp = new FraudApp({
      app_name,
      developer,
      category,
      risk_level,
      reported_on,
      investigation_status: false,
      block_status: false
    });

    await newApp.save();
    res.status(201).json({ message: 'Fraud App added successfully!', newApp });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
});

export default router;
