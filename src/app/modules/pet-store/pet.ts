export interface IPet{
    id: number,
    name: string,
    price: number,
    race: string
}

export class Pet implements IPet {
    id: number;
    name: string;
    price: number;
    race: string;

    constructor(pet?:IPet){
        if(!pet) return;
        this.id = pet.id;
        this.name = pet.name;
        this.price = pet.price;
        this.race = pet.race;
    }
}
