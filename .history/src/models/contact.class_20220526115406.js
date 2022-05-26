import { STATUS } from './status.enum';

export class Contact {
 firstName = '';
 lastName = '';
 email = '';
 online = STATUS.OFFLINE;

 constructor(firstName, lastName, email, online) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.online = online;
 }
}
