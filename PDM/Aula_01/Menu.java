import java.util.Scanner;

public class Menu {
    public static void main(String[] args) {
        int opcao = 0;
        Scanner leitor = new Scanner(System.in);
        while (true) {
            System.out.print("Digite um número para calcular o quadrado ou digite 0 para sair: ");
            opcao = leitor.nextInt();
            if (opcao == 0) {
                break;
            }
            System.out.println(square(opcao));
        }
        leitor.close();
    }
    
    public static int square(int n) {
        return (n * n);
    }

}
