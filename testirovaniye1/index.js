function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message {
    time
    constructor(name, message){
        this.name = name;
        this.time = gettime();
        this.message = message;
    }
    toString(){
        return (`${this.time} ${this.name}: ${this.message}`);
    }
}
mgArr = []
class Messenger{
    

    send(name, text){
        mgArr.push(new Message(name, text));
    }
    show_history(){
        mgArr.forEach(message => {
            console.log(message.toString());
        })
    }
}
let person = new Messenger();
person.send('Medina', 'Zdraste');
person.send('Mehriban', 'Zdraste');
person.show_history();