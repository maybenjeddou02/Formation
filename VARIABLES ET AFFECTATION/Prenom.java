import java.util.Scanner;

public class Prenom {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Entrez votre prénom :");

            String prenom = scanner.nextLine();

            System.out.println("Bonjour " + prenom);
        } catch (Exception e) {
                        System.out.println("Une erreur s'est produite.");
        }
    }
}
