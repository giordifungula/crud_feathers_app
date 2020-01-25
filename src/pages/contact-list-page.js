import React, {Component} from 'react'
import ContactList from '../components/contact-list';

class ContactListPage extends Component {
    render(){
        return(
            <div>
                <h1>List of Contacts <span role="img">😁</span> </h1>
                <ContactList></ContactList>
            </div>
        )
    }
}

export default ContactListPage