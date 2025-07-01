package PDM.Aula_05;

import java.util.ArrayList;
import java.util.List;

public class Carrinho {
    private List<Produto> produtos = new ArrayList<Produto>();
    private double soma;

    public void adProduto(Produto p){
        this.produtos.add(p);
    }

    public void notaFiscal(){
        System.out.println("******************************");
        System.out.println("Nota Fiscal");
        System.out.println("******************************");
        for(Produto p:produtos){
            this.soma += p.valor;
            System.out.printf("Produto: %s \n", p.nome);
        }
        // for(int i = 0; i < produtos.size(); i++){
        //     Produto v = produtos.get(i);
        //     this.soma += v.valor;
        // }
        System.out.println("\n******************************");
        System.out.printf("O valor total da compra: R$%.2f \n", this.soma);
        System.out.println("******************************\n");

    }
    
    public void pagar(double d){
        if (d < this.soma){
            System.out.println("Dinheiro insuficiente.");
        }else{
            double troco = (d - this.soma);
            System.out.printf("Valor: R$%.2f \nPagamento: R$%.2f \nTroco: R$%.2f.\n", soma, d, troco);
        }
    }
}