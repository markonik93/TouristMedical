export class OrderForm{
    id?:number;
    vremeZakazivanja?:string;
    imeIPrezime: string='';
    email?:string;
    telefon:number=0;
    zemljIGrad:string='';
    usluge?:string[];
    lokacija:string='';
    vremePregleda:string='';
    napomena:string='';
}