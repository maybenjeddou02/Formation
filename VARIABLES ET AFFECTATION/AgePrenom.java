import java.util.Scanner;
public class AgePrenom {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Entrez votre prénom :");
            String prenom = scanner.nextLine();
            System.out.println("Entrez votre age :");
            String age = scanner.nextLine();
            System.out.println("Je m'appelle " + prenom + " et j'ai " + age +"ans");
        } catch (Exception e) {
                        System.out.println("Une erreur s'est produite.");
        }
    }
}
