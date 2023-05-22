import Cards from './cards.model.js';

export async function createCard(req, res) {
    try {
      const card = req.body;
      req.body.isDisable = "false";
      const document = await Cards.create(card);
      res.status(201).send({result: "Card saved."});
    } catch (err) {
      res.status(500).json(err.message);
    }
  }