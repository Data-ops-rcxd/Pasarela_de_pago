import Cards from './cards.model.js';

export async function createCard(req, res) {
    try {
      const card = req.body;
      req.body.isDisable = "false";
      await Cards.create(card);
      res.status(201).send({result: "Card saved."});
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  export async function getCards(req, res) {
    try {
      const filter = req.params.name
      const value = await Users.findOne({ useremail: filter, isDisable: false });
      value ? res.status(200).json(value) : res.sendStatus(404);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  export async function patchCard(req, res) {
    try {
      const id = req.params.id;
      const document = await Users.findOneAndUpdate(
        { _id: id, isDisable: false },
        req.body,
        { runValidators: true }
      );
      document ? res.status(200).json("changes applied") : res.sendStatus(404);
    } catch (err) {
      res.status(200).json(err.message);
    }
  }

  export async function deleteCard(req, res) {
    try {
      const id = req.params.id;
      const document = await Users.findByIdAndUpdate(id, { isDisable: true });
      document ? res.status(200).json("changes applied") : res.sendStatus(404);
    } catch (err) {
      res.status(200).json(err.message);
    }
  }