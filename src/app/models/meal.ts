export class Meal {
    name: string;
    desc?: string;
    url?: string;

    constructor(_name: string, _desc?: string, _url?: string) {
        this.name = _name;
        _desc ? this.desc = _desc : this.desc = "";
        _url ? this.url = _url : this.url = "";
    }
}