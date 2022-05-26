import { STATUS } from '../../models/status.enum';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/ContactComponent.jsx';

const ContactListComponent = () => {
 const defaultContact = new Contact(
  'John',
  'Doe',
  'Johndoe@gmail.com',
  STATUS.OFFLINE
 );

 return (
  <>
   <h1>Tus contactos:</h1>
   <ContactComponent Contact={defaultContact} />
  </>
 );
};

export default ContactListComponent;
