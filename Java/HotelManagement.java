import java.util.ArrayList;
import java.util.Scanner;

class Room {
    int roomNumber;
    boolean isBooked;
    String customerName;

    Room(int number) {
        this.roomNumber = number;
        this.isBooked = false;
        this.customerName = "";
    }
}

public class HotelManagement {
    static ArrayList<Room> rooms = new ArrayList<>();

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Initialize 5 rooms
        for (int i = 1; i <= 5; i++) {
            rooms.add(new Room(i));
        }

        int choice = 0;
        while (choice != 5) {
            System.out.println("\n=== Hotel Management System ===");
            System.out.println("1. View Available Rooms");
            System.out.println("2. Book Room");
            System.out.println("3. Check Booking");
            System.out.println("4. Cancel Booking");
            System.out.println("5. Exit");
            System.out.print("Enter choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1 -> viewRooms();
                case 2 -> bookRoom(sc);
                case 3 -> checkBooking(sc);
                case 4 -> cancelBooking(sc);
                case 5 -> System.out.println("Exiting...");
                default -> System.out.println("Invalid choice!");
            }
        }
        sc.close();
    }

    static void viewRooms() {
        System.out.println("\nAvailable Rooms:");
        for (Room room : rooms) {
            if (!room.isBooked) {
                System.out.println("Room " + room.roomNumber);
            }
        }
    }

    static void bookRoom(Scanner sc) {
        System.out.print("Enter room number to book: ");
        int num = sc.nextInt();
        for (Room room : rooms) {
            if (room.roomNumber == num && !room.isBooked) {
                System.out.print("Enter customer name: ");
                sc.nextLine(); // consume newline
                room.customerName = sc.nextLine();
                room.isBooked = true;
                System.out.println("Room " + num + " booked successfully!");
                return;
            }
        }
        System.out.println("Room not available!");
    }

    static void checkBooking(Scanner sc) {
        System.out.print("Enter room number: ");
        int num = sc.nextInt();
        for (Room room : rooms) {
            if (room.roomNumber == num && room.isBooked) {
                System.out.println("Room " + num + " is booked by " + room.customerName);
                return;
            }
        }
        System.out.println("Room not booked!");
    }

    static void cancelBooking(Scanner sc) {
        System.out.print("Enter room number to cancel booking: ");
        int num = sc.nextInt();
        for (Room room : rooms) {
            if (room.roomNumber == num && room.isBooked) {
                room.isBooked = false;
                room.customerName = "";
                System.out.println("Booking cancelled successfully!");
                return;
            }
        }
        System.out.println("Room not booked!");
    }
            }
