import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adharverify',
  templateUrl: './adharverify.page.html',
  styleUrls: ['./adharverify.page.scss'],
})
export class AdharverifyPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  gotodocuments()
  {
    this.router.navigate(['documentsverify'])
  }
}
