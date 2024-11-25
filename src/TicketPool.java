import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

public class TicketPool {
    private final Queue<String> ticketQueue = new ConcurrentLinkedQueue<>();
    private final int maxCapacity;

    public TicketPool(int maxCapacity) {
        this.maxCapacity = maxCapacity;
    }

    // Add tickets to the pool
    public synchronized boolean addTicket(String ticket) {
        if (ticketQueue.size() < maxCapacity) {
            ticketQueue.offer(ticket);
            System.out.println("[INFO] Ticket added: " + ticket);
            return true;
        } else {
            System.out.println("[INFO] TicketPool is full. Cannot add more tickets.");
            return false;
        }
    }

    // Remove tickets from the pool
    public synchronized String removeTicket() {
        String ticket = ticketQueue.poll();
        if (ticket != null) {
            System.out.println("[INFO] Ticket purchased: " + ticket);
        } else {
            System.out.println("[INFO] No tickets available for purchase.");
        }
        return ticket;
    }

    public int getAvailableTickets() {
        return ticketQueue.size();
    }
}
