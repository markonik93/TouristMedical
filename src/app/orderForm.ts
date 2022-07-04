export interface OrderForm{
    id?:number;
    vremeZakazivanja?:string;
    inputImeIPrezime: string;
    inputEmail?:string;
    inputTelefon?:string;
    inputZemljaIGrad?:string;
    usluge?:string[];
    lokacija:string;
    vreme:string;
    inputNapomena:string;
    inputKomentar?:string[];
}