package ai.parking.system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ParkingSession")
public class ParkingSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SessionID")
    private int sessionId;
    @Column(name = "StartTime")
    private LocalDateTime startTime;
    @ManyToOne
    @JoinColumn(name = "VehicleID")
    private Vehicle vehicle;
    @ManyToOne
    @JoinColumn(name = "SlotID")
    private ParkingSlot parkingSlot;

}
