public class Conta {
    private double saldo;
    private static int numero = 1;
    private int numeroConta;

    public Conta(){
        System.out.println("Nova conta criada");
        this.saldo = 0;
        this.numeroConta = numero++;
    }

    public double getSaldo(){
        return saldo;
    }

    public int getNumero(){
        return numero;
    }

    public int getNumeroConta(){
        return numeroConta;
    }

    public void deposito(double valor){
        saldo += valor;
    }

    public void saque(double valor){
        if ((saldo - valor) < 0){
            System.out.println("Saldo insuficiente!");
        }else{
            saldo -= valor;
        }
    }

    public void transferencia(double valor, Conta c){
        if (this.saldo < valor){
            System.out.println("Saldo insuficiente para a transação");
        }else{
            this.saque(valor);
            c.deposito(valor);
            return;
        }
    }
}