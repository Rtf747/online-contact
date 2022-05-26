import { STATUS } from '../../models/status.enum';
import { Contact } from '../../models/contact.class';

function ContactListComponent() {
 const defaultContact = new Contact(
  'John',
  'Doe',
  'Johndoe@gmail.com',
  STATUS.OFFLINE
 );

 return <div>ContactComponent</div>;
}

export default ContactComponent;
