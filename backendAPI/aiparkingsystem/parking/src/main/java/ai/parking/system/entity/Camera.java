package ai.parking.system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Camera")
public class Camera {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CameraID")
    private int cameraId;

    @Column(name = "Location")
    private String location;

    @OneToOne
    @JoinColumn(name = "SlotID")
    private ParkingSlot parkingSlot;
}
