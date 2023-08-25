import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GitApiService } from '../git-api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  username: string = '';
  user: any;
  repos: any[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gitApiService: GitApiService
    ) { }

/*     ngOnInit() {
      this.route.params.subscribe(params => {
        console.log(params)
        this.username = params['username'];
        this.gitApiService.getUser(this.username).subscribe((user: any) => {
          this.user = user;
          console.log(params)
          console.log(user)
        });
        this.gitApiService.getRepos(this.username).subscribe(repos => {
          this.repos = repos;
        });
      });
    } */

    ngOnInit(): void {
      this.username = this.route.snapshot.params['username'];
      this.gitApiService.getUser(this.username).subscribe(data => {
        this.user = data;
      });
      this.gitApiService.getRepos(this.username).subscribe(data => {
        this.repos = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
      });
    }

    searchProfile() {
      if (this.username) {
        this.router.navigate(['/perfil', this.username]);
      }
    }
    openLink(link: string) {
      window.open(link, '_blank');
    }
  
    goBack() {
      this.router.navigate(['/home']);
    }

  
}
