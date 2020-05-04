import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagem : Postagem []

  constructor(private postagemService: PostagemService) { }

  ngOnInit(): void {

    this.findAllPostagens()

  }


  findAllPostagens(){

    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{

      this.listaPostagem = resp
      
    })

  }


}
