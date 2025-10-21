package ai.parking.system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Table(name = "Vehicle")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vehicleID;
    private String plateNumber;
    private String brand;
    private String model;
    private String color;

    @ManyToOne
    @JoinColumn(name = "UserID")
    private User user;
}
