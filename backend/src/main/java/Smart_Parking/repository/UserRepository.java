package Smart_Parking.repository;

import Smart_Parking.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findAll();
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
    Optional<User> findById(Long id);


    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsById(Long id);

    void delete(User user);
    void deleteById(Long id);

}
