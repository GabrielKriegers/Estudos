package PDM.Aula_04;

public class Aposentadoria {
    public Aposentadoria(){
    }

        public static void Calculo(Trabalhador t){
            if (t.sexo == "M" && t.idade >= 65 && t.tempot >= 30){
                System.out.println("Você pode se aposentar.");
    
            }else if (t.sexo == "F" && t.idade >= 60 && t.tempot >= 25){
                System.out.println("Você está apta a se aposentar.");
    
            }else {
                System.out.println("Você ainda não pode se aposentar.");
            }
        }
}
