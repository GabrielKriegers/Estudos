package PDM.Aula_04;

public class Aposentadoria {

        public static void Calculo(Trabalhador t){
            if (t.sexo.equalsIgnoreCase("m")){
                if (t.idade >= 65){
                    if (t.tempot >= 30){
                        System.out.println(t.nome + " pode se aposentar.");
                    }else{
                        System.out.println(t.nome + " não pode se aposentar pois o tempo de trabalho é insuficiente.");            
                    }
                }else{
                    System.out.println(t.nome + " não pode se aposentar pois a idade é insuficiente.");    
                }
            }else if (t.sexo.equalsIgnoreCase("f")){
                if (t.idade >= 60){
                    if (t.tempot >= 25){
                        System.out.println(t.nome + " pode se aposentar.");
                    }else{
                        System.out.println(t.nome + " não pode se aposentar pois o tempo de trabalho é insuficiente.");            
                    }
                }else{
                    System.out.println(t.nome + " não pode se aposentar pois a idade é insuficiente.");    
                }
            }
    



            // }else if (t.sexo.equalsIgnoreCase("f") && t.idade >= 60 && t.tempot >= 25){
            //     System.out.println("Você está apta a se aposentar.");
    
            // }else {
            //     System.out.println("Você ainda não pode se aposentar.");
            // }
        }
}
