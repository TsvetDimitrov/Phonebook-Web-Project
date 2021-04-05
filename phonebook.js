/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

let phonebook = [
	{name: `Tsvetomir`, number: `+814 849257`},
	{name: `Petar`, number: `+814 45564`},
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