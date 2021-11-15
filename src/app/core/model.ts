export class Endereco {
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep?: string;
  cidade?: string;
  estado?: string;
}

export class Pessoa {
  codigo?: number;
  nome?: string;
  email?:string;
  endereco = new Endereco();
  ativo = true;
}

export class Empresa {
  codigo?: number;
  nome?: string;
  email?:string;
  endereco = new Endereco();
  ativo = true;
}

export class Categoria {
  codigo?: number;
  name?: string;
}

export class Lancamento {
  codigo?: number;
  tipo = 'RECEITA';
  descricao?: string;
  dataVencimento?: Date;
  dataPagamento?: Date;
  valor?: number;
  observacao?: string;
  pessoa = new Pessoa();
  empresa = new Empresa();
  categoria = new Categoria();
}