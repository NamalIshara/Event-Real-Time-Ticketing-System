public class Customer implements Runnable {
    private final TicketPool ticketPool;
    private final String name;
    private final int purchaseInterval; // Time in milliseconds

    public Customer(String name, TicketPool ticketPool, int purchaseInterval) {
        this.name = name;
        this.ticketPool = ticketPool;
        this.purchaseInterval = purchaseInterval;
    }

    @Override
    public void run() {
        while (!Thread.currentThread().isInterrupted()) {
            ticketPool.removeTicket();
            System.out.println("[Customer] " + name + " attempted to purchase a ticket.");
            try {
                Thread.sleep(purchaseInterval); // Wait before the next attempt
            } catch (InterruptedException e) {
                System.out.println("[Customer] " + name + " interrupted. Stopping...");
                Thread.currentThread().interrupt();
            }
        }
    }
}
