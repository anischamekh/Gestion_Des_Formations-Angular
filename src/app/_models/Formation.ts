import { Theme } from './Theme';
import { User } from './User';


export class Formation {
        id!: number;
        titre!: String;
        description!: String;
        dateDebut!: Date;
        dateFin!: Date;
        duree!:number;
        etat!:String;
        lien!:String;
        image!:String;
        user!: User;
        theme!: Theme;
}
