public class Login extends AdminLog {

    // Implement the abstract method for login
    @Override
    public boolean Login(String username, String password) {
        String correctUsername = "admin";
        String correctPassword = "password123";

        if (username.equals(correctUsername) && password.equals(correctPassword)) {
            System.out.println("Login successful!");
            return true;
        } else {
            return false;
        }
    }
}
