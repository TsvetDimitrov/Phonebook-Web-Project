let phonebook = [
	{name: `Tsvetomir`, number: `+814 849257`},
	{name: `Petar`, number: `+814 455649`},
	{name: `Kiril`, number: `+814 546244`}
];


function getPhoneBook(){
	return [...phonebook];
}


function addContact(contact){
	phonebook.push(contact);
}

module.exports = {
	getPhoneBook,
	addContact
}