class Contact {
    constructor(name, number){
        this.name = name;
        this.number = number;
    }


    //crashes the whole website when used. 
    // set number(value){
    //     if(isNaN(value)){
    //         throw new Error('The input is not a number!');
    //     }

    //     this._number = value;
    // }
}


module.exports = Contact;