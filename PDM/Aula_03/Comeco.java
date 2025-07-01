public class Comeco {
    


    public static void main(String[] args) {
        /*
         * Criar uma classe conta 
         *      atributos:
         *        saldo (double) privado
         *        numero (int) privado
         *      métodos:
         *        getSaldo() publico 
         *        getNumero() publico
         *        método construtor que recebe o número da conta 
         *        e define o saldo como zero 
         */

        Conta c1 = new Conta();
        Conta c2 = new Conta();
        Conta c3 = new Conta();

        System.out.println("Número c1: "+c1.getNumeroConta());
        System.out.println("Número c2: "+c2.getNumeroConta());
        System.out.println("Número c3: "+c3.getNumeroConta());

        c1.deposito(10);
        c1.transferencia(5, c2);
        System.out.println("Saldo conta c1: "+c1.getSaldo());
        System.out.println("Saldo conta c2: "+c2.getSaldo());

    }
}