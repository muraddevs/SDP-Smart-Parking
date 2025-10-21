package ai.parking.system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ParkingSlot")
public class ParkingSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SlotID")
    private int slotId;

    @Column(name = "SlotNumber")
    private String slotNumber;

    @Column(name = "Location")
    private String location;

    @Column(name = "Status")
    private String status;

    @OneToOne(mappedBy = "parkingSlot", cascade = CascadeType.ALL)
    private Camera camera;



}
