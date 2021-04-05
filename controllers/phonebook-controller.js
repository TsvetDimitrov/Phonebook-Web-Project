const Contact = require(`../models/Contact`);
const {getPhoneBook, addContact} = require(`../phonebook`);
module.exports = {
  index: (req, res) => {
    res.render('index', {
      contacts: getPhoneBook()
    });
    
  },
  addPhonebookPost:(req, res) => {
    const {name, number} = req.body;
    const contact = new Contact(name, number);
    addContact(contact);
    res.redirect("/");
    
  }
}