package Smart_Parking.service.interfaces;

import Smart_Parking.entity.Car;

import java.util.List;
import java.util.Optional;

public interface CarService {
    List<Car> findAllByUserId(Long userId);

    Optional<Car> findByLicensePlate(String licensePlate);

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
