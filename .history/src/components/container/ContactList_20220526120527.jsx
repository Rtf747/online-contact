import { STATUS } from '../../models/status.enum';
import { Contact } from '../../models/contact.class';
import { ContactComponent } from '../pure/Contact.jsx';

function ContactListComponent() {
 const defaultContact = new Contact(
  'John',
  'Doe',
  'Johndoe@gmail.com',
  STATUS.OFFLINE
 );

 return (
  <>
   <ContactComponent Contact={defaultContact} />
  </>
 );
}

export default ContactComponent;
