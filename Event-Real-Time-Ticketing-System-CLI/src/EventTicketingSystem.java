import java.util.Scanner;

public class EventTicketingSystem {
    public static void main(String[] args) throws Exception {
        String logoFilePath = "src/logo.txt";

        try {
            // Read the logo.txt file and display it
            java.nio.file.Files.lines(java.nio.file.Paths.get(logoFilePath))
                    .forEach(System.out::println);
        } catch (java.io.IOException e) {
            e.printStackTrace();
        }

        userLogging();

        Configuration configuration = new Configuration(0, 0, 0, 0); // Temporary initialization
        configuration.setConfiguration();

        ControlPanel controlPanel = new ControlPanel();
        controlPanel.controlPanel(configuration);
    }

    public static void userLogging(){
        Scanner scanner = new Scanner(System.in);

        // Create an instance of SimpleAuthentication (or any other subclass of UserAuthentication)
        Login auth = new Login();

        boolean isLoggedIn = false;

        while (!isLoggedIn) {
            // Ask for username and password
            System.out.print("Enter username: ");
            String username = scanner.nextLine();
            System.out.print("Enter password: ");
            String password = scanner.nextLine();

            // Call the login method from the Login class
            isLoggedIn = auth.Login(username, password);

            if (!isLoggedIn) {
                System.out.println("Invalid username or password. Please try again.");
            }
        }

        System.out.println("Welcome to the Event Ticketing System!");


    }

}

