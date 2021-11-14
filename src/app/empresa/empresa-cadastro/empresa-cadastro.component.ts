import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Empresa } from 'src/app/core/model';
import { EmpresaService } from '../empresa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.scss']
})
export class EmpresaCadastroComponent implements OnInit {


  empresa = new Empresa();

  codigoEdit: number | undefined;

  constructor(
    private empresaService: EmpresaService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.params['codigo']);

    const codigoPendencia = this.route.snapshot.params['codigo'];

    this.codigoEdit = codigoPendencia;

    if(codigoPendencia){
      this.carregarEmpresa(codigoPendencia);
     }

  }

  get editando() {
    return Boolean(this.empresa.codigo)
  }

  salvar (form:NgForm){
    if(this.codigoEdit){
      this.cadastrar(form);
    // this.atualizarPendencia(form);
    } else{
      this.cadastrar(form);
    }

  }

  cadastrar(form: NgForm) {
    this.empresaService.adicionar(this.empresa)
      .subscribe(() => {
        form.reset();
        this.empresa = new Empresa();
        this.messageService.add({key: 'msg', severity: 'success', detail: 'Empresa cadastrado com sucesso!' });
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao cadastrar empresa!' })
      }); 
  }

  carregarEmpresa(codigo: number){
    this.empresaService.buscarPorCodigo(codigo)
      .subscribe(empresa => {
        this.empresa = empresa;
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao carregar cadastro!' })
      });
  }

  voltar(){
    this.router.navigate(['empresas']);
  }

}
