public class Aluno {
    private int matricula;
    private String nome;
    private String nascimento;
    public String turma;

    public Aluno(int ma, String no, String nasc) {
        System.out.println("Novo aluno criado");
        this.matricula = ma;
        this.nome = no;
        this.nascimento = nasc;
    }

    public String getNome() {
        return this.nome;
    }

    public String getnasc() {
        return this.nascimento;
    }

    public void getTudo() {
        System.out.println("Nome: "+this.nome+"\nMatrícula: " +this.matricula+"\nNascimento: "+ this.nascimento+"\nTurma: "+ this.turma);
    }
}
