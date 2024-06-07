const Message = require('../model/MessageModel');
const Key = require('../model/KeyModel');

class MessageController {
  async create(req, res) {
    const { email, message, keyId } = req.body;
    try {
    const newMessage = new Message({ email, message, keyId });
    await newMessage.save();
    res.status(200).send(newMessage);
    } catch (error) {
    res.status(400).send({ error: error.message });
    }
  }

  async show(req, res) {
    const { keyId } = req.params;
    try {
      const foundKey = await Key.findOne({ key: keyId });
      if (!foundKey) {
      return res.status(404).send({ message: 'Key not found' });
      }

      const messages = await Message.find({ keyId: foundKey._id });
      res.status(200).send(messages);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}

module.exports = new MessageController();
