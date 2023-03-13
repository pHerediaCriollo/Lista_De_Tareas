import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks:(title:String;completed:boolean;)[]=
  [
    (title:"Tender la cama", completed:false),
    (title:"Lavar los platos", completed:false),
    (title:"Hacer deberes", completed:false)
  ]
  newTask = ' ';

  addTask(){
    if(this.newTask.trim().length===0){
      return;
    }
    this.tasks.push({title:this.newTask,completed:false})
    this.newTask=' ';
  }

  deleteTask(task:{title:String;completed:boolean}){
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }

  getProgress(){
    const totalTasks =this.tasks.length;
    const completedTasks = this.tasks.filter(task => task.completed).length;

  }
}
