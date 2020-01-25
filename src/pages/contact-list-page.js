import React, {Component} from 'react'
import { connect } from 'react-redux';
import ContactList from '../components/contact-list';
import { fetchContacts } from '../actions/contact-actions';

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