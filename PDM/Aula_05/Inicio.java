package PDM.Aula_05;

public class Inicio {
    public static void main(String[] args) {
    
        Produto p1 = new Produto("Arroz", 5.40);
        Produto p2 = new Produto("Costela", 30.00);
        Produto p3 = new Produto("Laranja", 4.30);
        Produto p4 = new Produto("Queijo ralado", 10.90);
        Produto p5 = new Produto("Batata palha", 12.33);
        Produto p6 = new Produto("Macarrão", 2.99);
        Produto p7 = new Produto("Batata", 4.40);
        Produto p8 = new Produto("Suco de uva ", 15.80);
        Produto p9 = new Produto("Feijão", 10.50);
        Produto p10 = new Produto("Café Caboclo", 18.60);

        Carrinho car = new Carrinho();

        car.adProduto(p1);
        car.adProduto(p2);
        car.adProduto(p3);
        car.adProduto(p4);
        car.adProduto(p5);
        car.adProduto(p6);
        car.adProduto(p7);
        car.adProduto(p8);
        car.adProduto(p9);
        car.adProduto(p10);
        
        car.notaFiscal();
        car.pagar(120);

    }
}
