import java.util.Scanner;

public class Configuration {
    private int totalTickets;
    private int ticketReleaseRate;
    private int customerRetrievalRate;
    private int maxTicketCapacity;

    public Configuration(int totalTickets, int ticketReleaseRate, int customerRetrievalRate, int maxTicketCapacity) {
        this.totalTickets = totalTickets;
        this.ticketReleaseRate = ticketReleaseRate;
        this.customerRetrievalRate = customerRetrievalRate;
        this.maxTicketCapacity = maxTicketCapacity;
    }

    public void setConfiguration() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to the Real-Time Ticketing System CLI!");
        System.out.println("Please enter the configuration parameters:");

        // Input Total Tickets
        while (true) {
            System.out.print("Total Tickets: ");
            String input = scanner.nextLine(); // Read the entire line
            try {
                totalTickets = Integer.parseInt(input); // Try parsing the input
                if (totalTickets > 0) {
                    break;
                } else {
                    System.out.println("[ERROR] Total Tickets must be a positive number. Please try again.");
                }
            } catch (NumberFormatException e) {
                System.out.println("[ERROR] Invalid input. Please enter a positive integer.");
            }
        }

        // Input Ticket Release Rate
        while (true) {
            System.out.print("Ticket Release Rate (tickets/sec): ");
            String input = scanner.nextLine(); // Read the entire line
            try {
                ticketReleaseRate = Integer.parseInt(input); // Try parsing the input
                if (ticketReleaseRate > 0) {
                    break;
                } else {
                    System.out.println("[ERROR] Ticket Release Rate must be a positive number. Please try again.");
                }
            } catch (NumberFormatException e) {
                System.out.println("[ERROR] Invalid input. Please enter a positive integer.");
            }
        }

        // Input Customer Retrieval Rate
        while (true) {
            System.out.print("Customer Retrieval Rate (tickets/sec): ");
            String input = scanner.nextLine(); // Read the entire line
            try {
                customerRetrievalRate = Integer.parseInt(input); // Try parsing the input
                if (customerRetrievalRate > 0) {
                    break;
                } else {
                    System.out.println("[ERROR] Customer Retrieval Rate must be a positive number. Please try again.");
                }
            } catch (NumberFormatException e) {
                System.out.println("[ERROR] Invalid input. Please enter a positive integer.");
            }
        }

        // Input Maximum Ticket Capacity
        while (true) {
            System.out.print("Maximum Ticket Capacity: ");
            String input = scanner.nextLine(); // Read the entire line
            try {
                maxTicketCapacity = Integer.parseInt(input); // Try parsing the input
                if (maxTicketCapacity > 0) {
                    if (totalTickets <= maxTicketCapacity) {
                        break;
                    } else {
                        System.out.println("[ERROR] Total Tickets cannot exceed Maximum Ticket Capacity. Please try again.");
                    }
                } else {
                    System.out.println("[ERROR] Maximum Ticket Capacity must be a positive number. Please try again.");
                }
            } catch (NumberFormatException e) {
                System.out.println("[ERROR] Invalid input. Please enter a positive integer.");
            }
        }


        // Create configuration object
        Configuration configuration = new Configuration(totalTickets, ticketReleaseRate, customerRetrievalRate, maxTicketCapacity);

        // Display the configuration
        configuration.displayConfiguration();

        scanner.close();
    }

    public void displayConfiguration() {
        System.out.println("[INFO] System configured successfully:");
        System.out.println("       Total Tickets: " + totalTickets);
        System.out.println("       Ticket Release Rate: " + ticketReleaseRate + " tickets/sec");
        System.out.println("       Customer Retrieval Rate: " + customerRetrievalRate + " tickets/sec");
        System.out.println("       Maximum Ticket Capacity: " + maxTicketCapacity);
    }

    // Getters and setters (if needed)
    public int getTotalTickets() {
        return totalTickets;
    }

    public int getTicketReleaseRate() {
        return ticketReleaseRate;
    }

    public int getCustomerRetrievalRate() {
        return customerRetrievalRate;
    }

    public int getMaxTicketCapacity() {
        return maxTicketCapacity;
    }
}
