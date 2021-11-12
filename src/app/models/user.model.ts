export class User {
    constructor(
        public firstName: String,
        public lastName: String,
        public email: String,
        public drinkPreference: String,
        public hobbies?: String[],
    ) { }
}