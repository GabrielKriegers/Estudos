public class Inicio {
    public static void main(String[] args) {
        Aluno a1 = new Aluno(123, "Carlos", "01/01/2005");
        Aluno a2 = new Aluno(222, "Valéria", "01/07/2006");

        a1.turma = "info22";
        a2.turma = "adm23";


        System.out.println(a1.getNome() +" pertence a turma "+ a1.turma);
        System.out.println(a2.getNome() +" pertence a turma "+ a2.turma);

        System.out.println(a1.getNome() +" nasceu em "+a1.getnasc());
        System.out.println(a2.getNome() +" nasceu em "+a2.getnasc());

        a2.turma = "info23";
        System.out.println(a2.getNome()+ " achou ADM muito fácil e mudou para informática (turma "+ a2.turma+")");
        System.out.println(a2.getNome() +" pertence a turma "+ a2.turma);
        a1.getTudo();
    }
}