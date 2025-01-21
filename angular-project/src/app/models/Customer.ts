import { v4 as uuidv4 } from 'uuid';

export class customer{
    id;
    name='';
    nip= '';
    city= '';
    street ='';
    postalCode= '';
    comments= ''
    branch= '';
    active= false
    
    constructor(){ this.id = uuidv4()}
}