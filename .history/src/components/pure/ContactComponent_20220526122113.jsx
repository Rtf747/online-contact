import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact }) => {
 return (
  <>
   <h2>Nombre: {contact.firstName}</h2>
   <h2>Apellido: {contact.lastName}</h2>
   <h2>Email: {contact.email}</h2>
   <h2>
    Estado: {contact.status ? 'Contacto En Línea' : 'Contacto No Disponible'}
   </h2>
  </>
 );
};

ContactComponent.propTypes = {
 contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
