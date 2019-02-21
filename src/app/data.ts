export class Data {
    public id: number;
    public name: string;
    public chosenDate: string;
    public optionSelected: string;

    public testme(): string {
        return "do i exist";
    }

    constructor(id: number, name: string, chosenDate: string, optionSelected: string) {
        this.id = id;
        this.name = name;
        this.chosenDate = chosenDate;
        this.optionSelected = optionSelected;
    }

}
