package PDM.Aula_04;

public class Inicio {
    public static void main(String[] args) {
        Trabalhador t1 = new Trabalhador(70, 35, "M" );
        Trabalhador t2 = new Trabalhador(50, 25, "F");

       Aposentadoria.Calculo(t1);
       Aposentadoria.Calculo(t2);
        
    }
}
