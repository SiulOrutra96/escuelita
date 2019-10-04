import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-clase-admin',
  templateUrl: './detalles-clase-admin.page.html',
  styleUrls: ['./detalles-clase-admin.page.scss'],
})
export class DetallesClaseAdminPage implements OnInit {

  claseId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parametros => {
      if (!parametros.has('claseId')) {
        this.router.navigateByUrl('/grupos');
      }

      console.log('sel');

      this.claseId = parametros.get('claseId');
    });
  }
}
