const Contact = require(`../models/Contact`);
const {getPhoneBook, addContact} = require(`../phonebook`);
module.exports = {
  index: (req, res) => {
    res.render('index', {
      contacts: getPhoneBook()
    });
    
  },

  //TODO add phone number only with numbers, if there is a string print "error". 
  addPhonebookPost:(req, res) => {
    const {name, number} = req.body;
    const contact = new Contact(name, number);
    addContact(contact);
    res.redirect("/");  
  }
}