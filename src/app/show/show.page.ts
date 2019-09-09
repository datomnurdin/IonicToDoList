import { Component, OnInit } from '@angular/core';
import { Provider } from '../../providers/provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

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
      console.log(data);
    });
  }

}
