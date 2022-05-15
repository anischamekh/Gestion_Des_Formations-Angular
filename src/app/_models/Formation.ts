import { Theme } from './Theme';
import { User } from './User';


export class Formation {
        id!: number;
        titre!: String;
        description!: String;
        date!: Date;
        user!: User;
        theme!: Theme;
}
