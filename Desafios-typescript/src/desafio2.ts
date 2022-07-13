// Como podemos melhorar o esse código usando TS? 
enum Profissao {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
}

const pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

const pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
}

const pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

const pessoa5 = {
    nome: "Áurea", 
    idade: 5 
}