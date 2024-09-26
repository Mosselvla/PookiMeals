export class Meal {
    name: string;
    desc?: string;
    url?: string;
    bentoable?: boolean;

    constructor(_name: string, _desc?: string, _url?: string, _bentoable?: boolean) {
        this.name = _name;
        _desc ? this.desc = _desc : this.desc = "";
        _url ? this.url = _url : this.url = "";
        _bentoable? this.bentoable = _bentoable : this.bentoable = false;
    }
}