class Contacts {
    constructor(){
        this.contacts = []
    }

    getAllContacts() {
        return this.contacts
    }

    getSingleContact(id) {
      return this.contacts.find(contact => contact.id === id) 
    }

    createContact(contact) {
        contact.id = this.contacts.length + 1
        this.contacts.push(contact)
        return contact
    }

    updateContact(id, updatedContact) {
        let index = this.contacts.findIndex(contact => contact.id = id)
        this.contacts[index].name = updatedContact.name || this.contacts[index].name
        this.contacts[index].phone = updatedContact.phone || this.contacts[index].phone
        this.contacts[index].email = updatedContact.email || this.contacts[index].email
        return this.contacts[index]
    }

    deleteContact(id) {
        let index = this.contacts.findIndex(contact => contact.id = id)
        let deletedObj = this.contacts[index]
        this.contacts = this.contacts.filter(contact => contact.id !== id)
        return deletedObj
    }

}

exports.contacts = new Contacts()


