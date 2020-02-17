export class TextBoxComponent {
    constructor(public text: string) {}
    render() {
        console.log(`Rendering '${this.text}' value.`);
    }
}