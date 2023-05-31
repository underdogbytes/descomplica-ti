# Criação de Aplicações e Sistemas: Módulos e Matrizes em Java

## Exercícios


## Questão 01 
Para converter uma entrada de dados do usuário que chega no programa Java como String, para o tipo inteiro antes da realização do processamento desses dados, utiliza-se o método:
### Resposta:
- [ ] a) ​String.parseString()
- [x] b) ​Integer.parseInt()
- [ ] c) ​Double.parseDouble()
- [ ] d) ​Char.parseChar ()
- [ ] e) ().charAt(0)

> SOLUÇÃO DO PROFESSOR ✨
>
> Quando você realiza uma entrada de dados pelo Prompt de Comando, essa informação chega no programa Java como String. Essa String precisa ser convertida para inteiro (int) usando o comando Integer.parseInt().

Prof. Ricardo Monteiro

## Questão 02 
​Para converter uma entrada de dados do usuário que chega no programa Java como String, para o tipo real antes da realização do processamento desses dados, utiliza-se o método:
### Resposta:
- [x] a) ​Double.parseDouble()
- [ ] b) Integer.parseInt()
- [ ] c) String.parseString()
- [ ] d) Char.parseChar ()
- [ ] e) ().charAt(0)

> SOLUÇÃO DO PROFESSOR ✨
>
> Quando você realiza uma entrada de dados pelo Prompt de Comando, essa informação chega no programa Java como String. Essa String precisa ser convertida para real (double) usando o comando Double.parseDouble().

Prof. Ricardo Monteiro


## Questão 03 
​Para converter uma entrada de dados do usuário que chega no programa Java como String, para o tipo caracter, antes da realização do processamento desses dados, utiliza-se o método:
### Resposta:
- [ ] a) ​String.parseString()
- [ ] b) Integer.parseInt()
- [ ] c) Double.parseDouble()
- [x ] d) ().charAt(0)
- [ ] e) Char.parseChar ()

> SOLUÇÃO DO PROFESSOR ✨
>
> Quando você realiza uma entrada de dados pelo Prompt de Comando, essa informação chega no programa Java como String. Essa String precisa ser convertida para caracter (char) usando o comando ().charAt(0)

Prof. Ricardo Monteiro


## Questão 04 
Considere o seguinte programa Java.

class Ex04
{
public static void main (String entrada[])
{
int n1, n2;
double x;
n1 = Integer.parseInt(entrada[0]);
n2 = Integer.parseInt(entrada[1]);
x = n1 / n2;
System.out.println(x);
System.exit(0);
}
}

Ao executar realizar a execução deste programa no Prompt de Comando, java Ex04 1 4, o valor que será apresentado ao usuário pelo comando System.out.println(x); será:
### Resposta:
- [ ] a) – 0,25
- [ ] b) ​3.0
- [ ] c) ​0.25
- [x] d) ​0.0
- [ ] e) ​4.0

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Quando você usa o operador / num programa java, se os dois números que você está dividindo são do tipo inteiro, o resultado é o quociente (sem o resto) da divisão dos dois números. Por isso, o resultado é 0.0, pois o quociente da divisão de 1 por 4 é zero​

Prof. Ricardo Monteiro


## Questão 05 
​Para ter uma interação com o usuário, para receber informações para o processamento de dados no programa Java, o comando que pode ser utilizado e que está no biblioteca javax.swing.* do Java é:​

​JOptionPane.showInput​

​JOptionPane.showMessage​

​JOptionPane.showInputDialog​


### Resposta:
- [ ] a) ​JOptionPane.showInput
- [ ] b) ​JOptionPane.showMessage
- [x] c) ​JOptionPane.showInputDialog
- [ ] d) ​JOptionPane.showMessageDialog
- [ ] e) ​JOptionPane.show

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Quando você utiliza a biblioteca javax.swing.* no programa Java, você pode utilizar a interação com o usuário por meio de interface gráfica. Neste caso, o JOptionPane.showInputDialog cria uma janela de Diálogo de Entrada que vai enviar uma mensagem para o usuário e capturar o dado que o usuário digitar, trazendo para dentro do programa Java.​

Prof. Ricardo Monteiro



## Questão 06 
​Para ter uma interação com o usuário, para enviar uma mensagem com o resultado do processamento de dados no programa Java, o comando que pode ser utilizado e que está no biblioteca javax.swing.* do Java é:
### Resposta:
- [ ] a) ​JOptionPane.showInput
- [ ] b) ​JOptionPane.showInputDialog
- [ ] c) ​JOptionPane.showMessage
- [ ] d) ​JOptionPane.show
- [x] e) ​JOptionPane.showMessageDialog

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Quando você utiliza a biblioteca javax.swing.* no programa Java, você pode utilizar a interação com o usuário por meio de interface gráfica. Neste caso, o JOptionPane.showMessageDialog cria uma janela de Diálogo de Mensagem que vai enviar uma mensagem informativa para o usuário​

Prof. Ricardo Monteiro