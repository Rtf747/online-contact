function ContactComponent({ Contact }) {
 return (
  <>
   <h2>Nombre: {Contact.firstName}</h2>
   <h2>Apellido: {Contact.lastName}</h2>
   <h2>Email: {Contact.email}</h2>
   <h2>
    Estado: {Contact.status ? 'Contacto En Línea' : 'Contacto No Disponible'}
   </h2>
  </>
 );
}

export default Contact;
