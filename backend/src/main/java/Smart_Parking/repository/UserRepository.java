package Smart_Parking.repository;

import Smart_Parking.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findAll();
    Optional<User> findByEmail(String email);
    Optional<User> findByFullName(String username);
    Optional<User> findById(Long id);
    Optional<User> findByCarsId(Long carId);
    
    @Query("SELECT u FROM User u JOIN u.cars c WHERE c.licensePlate = :licensePlate")
    Optional<User> findByCarLicensePlate(@Param("licensePlate") String licensePlate);


    boolean existsByEmail(String email);
    boolean existsByFullName(String username);
    boolean existsById(Long id);



}
