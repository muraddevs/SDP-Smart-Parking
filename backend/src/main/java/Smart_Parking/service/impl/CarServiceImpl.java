package Smart_Parking.service.impl;

import Smart_Parking.entity.Car;
import Smart_Parking.mapper.CarMapper;
import Smart_Parking.repository.CarRepository;
import Smart_Parking.service.interfaces.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CarServiceImpl implements CarService {
    private final CarRepository carRepository;
    private final CarMapper carMapper;

    @Override
    public List<Car> findAllByUserId(Long userId) {
        return carRepository.findAllByUserId(userId);
    }

    @Override
    public Optional<Car> findByLicensePlate(String licensePlate) {
        return carRepository.findByLicensePlate(licensePlate);
    }

    @Override
    public Optional<Car> findFirstByUserId(Long userId) {
        return carRepository.findFirstByUserId(userId);
    }

    @Override
    public List<Car> findByBrandIgnoreCase(String brand) {
        return carRepository.findByBrandIgnoreCase(brand);
    }

    @Override
    public List<Car> findByModelIgnoreCase(String model) {
        return carRepository.findByModelIgnoreCase(model);
    }

    @Override
    public List<Car> findByYear(int year) {
        return carRepository.findByYear(year);
    }

    @Override
    public List<Car> findByColorIgnoreCase(String color) {
        return carRepository.findByColorIgnoreCase(color);
    }

    @Override
    public List<Car> findByBrandIgnoreCaseAndModelIgnoreCase(String brand, String model) {
        return carRepository.findByBrandIgnoreCaseAndModelIgnoreCase(brand, model);
    }

    @Override
    public boolean existsByLicensePlateIgnoreCase(String licensePlate) {
        return carRepository.existsByLicensePlateIgnoreCase(licensePlate);
    }

    @Override
    public long countByUserId(Long userId) {
        return carRepository.countByUserId(userId);
    }

    @Override
    public List<Car> findByUserIdAndBrandIgnoreCase(Long userId, String brand) {
        return carRepository.findByUserIdAndBrandIgnoreCase(userId, brand);
    }

    @Override
    public List<Car> findByUserIdAndModelIgnoreCase(Long userId, String model) {
        return carRepository.findByUserIdAndModelIgnoreCase(userId, model);
    }
}
