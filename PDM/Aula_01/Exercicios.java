
import java.util.*;

public class Exercicios {
    public static void main(String[] args){

        Scanner leitor = new Scanner(System.in);

        System.out.print("Digite o nome do aluno: ");
        String nome = leitor.nextLine();
        System.out.print("Digite a primeira nota: ");
        double n1 = leitor.nextDouble();
        System.out.print("Digite a segunda nota: ");
        double n2 = leitor.nextDouble();
        System.out.print("Digite a terceira nota: ");
        double n3 = leitor.nextDouble();

        double media = (n1 + n2 + n3) / 3;

        String status;
        if (media >= 6) {
            status = "aprovado";
        }else {
            status = "reprovado";
        }

        System.out.println(nome + ", sua média é "+ media +" você está "+status);
        leitor.close();
    }
}