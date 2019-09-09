import { Component, OnInit } from '@angular/core';
import { Provider } from '../../providers/provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  name:string = "";
  description:string = "";

  constructor(
    private provider: Provider,
    private router: Router
  ) { }

  ngOnInit() {
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
}
