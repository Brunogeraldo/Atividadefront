

function pegar(){
    const regexTelefoneBR = /^\d{2}-\d{4}-\d{4}$/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    const regexNome = /^[a-zA-ZÀÁÇÏÉÊÓÔÚÜÍÌÕÃÑáàçïéêóôúüíìõãñ\s]+$/;

    const input_nome = document.getElementById("Nome");
    const nome = input_nome.value;

    const input_email = document.getElementById("email");
    const email = input_email.value;

    const input_num = document.getElementById("numero");
    const telefoneBR = input_num.value;

    if (regexNome.test(nome)) {
      console.log("Nome válido!");
    } else {
      console.log("Nome inválido!");
    }
    
    if (regexEmail.test(email)) {
      console.log("E-mail válido!");
    } else {
      console.log("E-mail inválido!");
    }
    
    if (regexTelefoneBR.test(telefoneBR)) {
      console.log("Número de telefone válido (formato brasileiro)!");
    } else {
      console.log("Número de telefone inválido (formato brasileiro)!");
    }
    
}

