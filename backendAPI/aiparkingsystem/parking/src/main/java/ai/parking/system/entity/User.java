package ai.parking.system.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import java.util.List;


@Entity
@NoArgsConstructor
@AllArgsConstructor
//@Getter
//@Setter
@Data
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserID")
    private int userID;
    @Column(name = "Name")
    private String userName;
    @Column(name = "Faculty")
    private String faculty;
    @Column(name = "IdNumber")
    private String idNumber;
    @Column(name = "Email")
    private String email;
    @Column(name = "Password")
    private String password;


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<Vehicle> vehicles;


}
