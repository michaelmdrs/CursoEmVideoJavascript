function verificar() {
  var nomeUsuario = document.getElementById("txtnome");
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);
  let nota3 = Number(document.getElementById("nota3").value);
  let nota4 = Number(document.getElementById("nota4").value);
  let media = (nota1 + nota2 + nota3 + nota4) / 4
  let res = document.getElementById("resultado");
 
  if (nomeUsuario.value.length == 0) {
    alert("ALUNO NÃO IDENTIFICADO!");

  }else if (nota1 <= 0 || nota2 <= 0 || nota3 <= 0 || nota4 <= 0) {
    alert("[ERRO] preencha os campos e tente novamente");
    res.innerHTML += 'Impossível calcular a nota!'
  }else if (media >= 9 && media == 10) {
        res.innerHTML += `Parabéns! você está no quadro de honra! \u{1F62D}`
    }else if (media >= 7 && media < 9) {
        res.innerHTML += `Parabéns! você foi aprovado! \u{1F60D}`
    }else if (media > 5 && media <= 6) {
        res.innerHTML += `Aluno em RECUPERAÇÃO. \u{1F614}`
    }else if (media >= 0 && media <= 5) {
        res.innerHTML += `Aluno REPROVADO \u{1F62D}`
    }else {
        res.innerHTML += `NOTA INVÁLIDA! \u{26A0}`
    }
    
function Redirect() {
        setTimeout("location.reload(true);",2000);   
    }
    
    Redirect();
}


