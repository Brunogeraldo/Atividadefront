# Atividadefront

"const regexNome = /^[a-zA-ZÀÁÇÏÉÊÓÔÚÜÍÌÕÃÑáàçïéêóôúüíìõãñ\s]+$/;"
^ está indicando o inicio da string
[a-zA-ZÀÁÇÏÉÊÓÔÚÜÍÌÕÃÑáàçïéêóôúüíìõãñ\s] corresponde as letras minusculas e maiusculas com acento da lingua portuguesa;
\s corresponde a espaço em branco;
+$ corresponde ao final da string;

"const regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;"

"[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]" corresponde aos caracteres permitidos em um email;
@ corresponde ao @ de email;
[a-zA-Z0-9-] corresponde ao dominio de email, que pode ter letras de A-Z com números de 0-9;
(?:\.[a-zA-Z0-9-]+) corresponde a extensão do dominio de email ;
$ indica o final da string;

const regexTelefoneBR = /^\d{2}-\d{4}-\d{4}$/;
^ corresponde ao inicio da string
d{} corresponde ao um numero decimal
d{4} corresponde a quantidade de numeros em sequencia vai ter
