import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ControlPanel {

    public void controlPanel(Configuration configuration) throws Exception {
        // Initialize TicketPool with maximum capacity
        TicketPool ticketPool = new TicketPool(configuration.getMaxTicketCapacity()); // Set max capacity from Configuration

        // Thread pool to manage threads
        ExecutorService executor = Executors.newFixedThreadPool(10);

        // Start Vendor threads
        for (int i = 0; i < 3; i++) { // 3 Vendors
            Vendor vendor = new Vendor("Vendor-" + (i + 1), ticketPool, configuration.getTicketReleaseRate()); // Set release rate from Configuration
            executor.submit(vendor);
        }

        // Start Customer threads
        for (int i = 0; i < 7; i++) { // 7 Customers
            Customer customer = new Customer("Customer-" + (i + 1), ticketPool, configuration.getCustomerRetrievalRate()); // Set retrieval rate from Configuration
            executor.submit(customer);
        }

        // Run the system for 10 seconds
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        executor.shutdownNow(); // Stops all threads
    }
}
