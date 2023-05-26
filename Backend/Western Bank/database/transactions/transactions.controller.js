import Transactions from './transactions.model.js';

export async function createTransaction(req, res) {
    try {
      const transaction = req.body;
      req.body.processed = "true";
      await Transactions.create(transaction);
      res.status(201).send({ result: "Transaction saved." });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

export async function getTransaction(req, res) {
try {
    const value = await Transactions.find();
    value ? res.status(200).json(value) : res.sendStatus(404);
} catch (err) {
    res.status(500).json(err.message);
}
}