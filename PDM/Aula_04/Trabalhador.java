package PDM.Aula_04;

public class Trabalhador {
    public String nome;
    public int idade;
    public int tempot;
    public String sexo;

    public Trabalhador(String nome, int idade, int tempot, String sexo){
        System.out.println("Pessoa cadastrada!");
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.tempot = tempot;
    }

    // public void Calculo(){
    //     if (this.sexo == "M" && this.idade >= 65 && this.tempot >= 30){
    //         System.out.println("Você pode se aposentar.");

    //     }else if (this.sexo == "F" && this.idade >= 60 && this.tempot >= 25){
    //         System.out.println("Você está apta a se aposentar.");

    //     }else {
    //         System.out.println("Você ainda não pode se aposentar.");
    //     }
    // }
}
