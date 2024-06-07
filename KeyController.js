const Key = require('../model/KeyModel');

class KeyController {
  async create(req, res) {
    const { key } = req.body;
    try {
    const createKey = await Key.create({ key });
  res.status(200).send(createKey);
    } catch (error) {
    res.status(400).send(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteKey = await Key.findByIdAndDelete(id);
      if (!deleteKey) {
        return res.status(404).send({ message: 'Key not found' });
      }
      res.status(200).send({ message: 'Key deleted successfully' });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new KeyController();