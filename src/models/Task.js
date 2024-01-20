
import { LEVELS } from "./level.enum";
export class Task {
    Name='';
    Description='';
    Completed= false;
    Level=LEVELS.NORMAL

constructor(name,description,completed,level){
    this.Name=name;
    this.Description=description;
    this.Completed=completed;
    this.Level=level;
    
}

}