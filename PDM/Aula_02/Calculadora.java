import java.util.Scanner;

public class Calculadora {
    public static void main (String[] args) {
        Scanner leitor = new Scanner(System.in);
        Scanner n = new Scanner(System.in);
        int opcao = 1; 
        while (opcao != 0) {
            System.out.println("*******************");

            System.out.println("1 - somar");
            System.out.println("2 - subtrair");
            System.out.println("3 - multiplicar");
            System.out.println("4 - dividir");
            System.out.println("5 - quadrado");
            System.out.println("0 - sair");
            System.out.println("--------------------");
            System.out.print("Digite uma opção: ");
            opcao = leitor.nextInt();

            if (opcao == 1) {
            System.out.println("1° Número: ");
            Double n1 = n.nextDouble();
            System.out.println("2° Número: ");
            Double n2 = n.nextDouble();
            System.out.println("A soma é = "+somar(n1, n2)); 
            
            }else if (opcao == 2) {
                System.out.print("1° Número: ");
                Double n1 = n.nextDouble();
                System.out.print("2° Número: ");
                Double n2 = n.nextDouble();
                System.out.print("A subtração é = "+subtrair(n1, n2)); 
            }else if (opcao == 3) {
                System.out.print("1° Número: ");
                Double n1 = n.nextDouble();
                System.out.print("2° Número: ");
                Double n2 = n.nextDouble();
                System.out.print("A multiplicação é = "+multiplicar(n1, n2)); 
            }else if (opcao == 4) {
                System.out.print("1° Número: ");
                Double n1 = n.nextDouble();
                System.out.print("2° Número: ");
                Double n2 = n.nextDouble();
                System.out.print("A divisão é = "+dividir(n1, n2)); 
            }else if (opcao == 5) {
                System.out.print("Número: ");
                Double n1 = n.nextDouble();
                System.out.print("O quadrado é = "+quadrado(n1)); 
            }else {
                break;
            }
        }
        leitor.close();
        n.close();
    }
    public static Double somar(Double n1, Double n2) {
        return(n1 + n2);
    }

    public static Double subtrair(Double n1, Double n2){
        return (n1 - n2);
    }

    public static Double multiplicar(Double n1, Double n2) {
        return(n1 * n2);
    }
    
    public static Double dividir(Double n1, Double n2) {
        return(n1 / n2);
    }

    public static Double quadrado (Double n1) {
        return (n1 * n1);
    }

}