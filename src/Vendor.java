import java.util.UUID;

public class Vendor implements Runnable {
    private final TicketPool ticketPool;
    private final String name;
    private final int releaseInterval; // Time in milliseconds

    public Vendor(String name, TicketPool ticketPool, int releaseInterval) {
        this.name = name;
        this.ticketPool = ticketPool;
        this.releaseInterval = releaseInterval;
    }

    @Override
    public void run() {
        while (!Thread.currentThread().isInterrupted()) {
            String ticket = "Ticket-" + UUID.randomUUID();
            if (ticketPool.addTicket(ticket)) {
                System.out.println("[Vendor] " + name + " added a ticket: " + ticket);
            }
            try {
                Thread.sleep(releaseInterval); // Wait before releasing the next ticket
            } catch (InterruptedException e) {
                System.out.println("[Vendor] " + name + " interrupted. Stopping...");
                Thread.currentThread().interrupt();
            }
        }
    }
}
