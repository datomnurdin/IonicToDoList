import { Component, OnInit } from '@angular/core';
import { Provider } from '../../providers/provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  id:number;
  name:string = "";
  description:string = "";

  constructor(
    private provider: Provider,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data:any) => {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
    });
  }

  createdProcess(){
    return new Promise(resolve =>{
      let body = {
        name: this.name,
        description: this.description
      };

      this.provider.postData(body, 'create_task.php').subscribe(data => {
        this.router.navigate(['/index']);
        console.log("OK");
      });
    });
  }

  updatedProcess(){
    return new Promise(resolve =>{
      let body = {
        taskId: this.id,
        name: this.name,
        description: this.description
      };

      this.provider.postData(body, 'update_task.php').subscribe(data => {
        this.router.navigate(['/index']);
        console.log("OK");
      });
    });
  }
}
