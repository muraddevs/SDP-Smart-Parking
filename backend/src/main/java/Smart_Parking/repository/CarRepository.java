package Smart_Parking.repository;

import Smart_Parking.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CarRepository extends JpaRepository<Car, Long> {

    List<Car> findAllByUserId(Long userId);
    
    @Query("SELECT c FROM Car c WHERE LOWER(c.licensePlate) = LOWER(:licensePlate)")
    Optional<Car> findByLicensePlate(@Param("licensePlate") String licensePlate);
    
    Optional<Car> findFirstByUserId(Long userId);
    
    List<Car> findByBrandIgnoreCase(String brand);
    
    List<Car> findByModelIgnoreCase(String model);
    
    List<Car> findByYear(int year);
    
    List<Car> findByColorIgnoreCase(String color);
    
    List<Car> findByBrandIgnoreCaseAndModelIgnoreCase(String brand, String model);
    
    boolean existsByLicensePlateIgnoreCase(String licensePlate);
    
    long countByUserId(Long userId);
    
    List<Car> findByUserIdAndBrandIgnoreCase(Long userId, String brand);
    
    List<Car> findByUserIdAndModelIgnoreCase(Long userId, String model);
}
