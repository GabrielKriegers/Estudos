package PDM.Aula_04;

import java.util.ArrayList;
import java.util.List;

public class Inicio {
    public static void main(String[] args) {
        Trabalhador t1 = new Trabalhador("Carla", 70, 35, "M");
        Trabalhador t2 = new Trabalhador("Pedro", 50, 25, "F");

        List<Trabalhador> pessoas = new ArrayList<Trabalhador>();
        pessoas.add(t1);
        pessoas.add(t2);
        

    //    Aposentadoria.Calculo(t1);
    //    Aposentadoria.Calculo(t2);
       for(int i = 0; i < pessoas.size(); i++){
        Aposentadoria.Calculo(pessoas.get(i));
       } 
    }
}
