import { Component, OnInit } from '@angular/core';
import { Provider } from '../../providers/provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  tasks:any = [];

  constructor(
    private provider: Provider,
    private router: Router
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.tasks = []
    this.loadTask();
  }

  create(){
    this.router.navigate(['/create']);
  }

  update(id,name,description){
    this.router.navigate(['/create/'+id+'/'+name+'/'+description]);
  }

  show(id,name,description){
    this.router.navigate(['/show/'+id+'/'+name+'/'+description]);
  }

  delete(id){
    let body = {
      taskId:id
    };

      this.provider.postData(body, 'delete_task.php').subscribe(data => {
        this.ionViewWillEnter();
      });
  }

  loadTask(){
    return new Promise(resolve =>{
      let body = {};

      this.provider.postData(body, 'get_all_tasks.php').subscribe(data => {
        for(let task of data['tasks']){
          this.tasks.push(task);
        }
        resolve(true);
      });
    });
  }

}
