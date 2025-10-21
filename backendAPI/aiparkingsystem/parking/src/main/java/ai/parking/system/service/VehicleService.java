package ai.parking.system.service;

import ai.parking.system.entity.Vehicle;
import ai.parking.system.repository.VehicleRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class VehicleService {
    private final VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }


    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Vehicle getVehicleById(@PathVariable Integer id) {
        return vehicleRepository.findById(id).orElseThrow(() -> new RuntimeException("Vehicle not found with the following ID: " + id));
    }

    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public Vehicle updateVehicle(@PathVariable Integer id, @RequestBody Vehicle updatedVehicle) {
        return vehicleRepository.findById(id).map(vehicle -> {
            vehicle.setPlateNumber(updatedVehicle.getPlateNumber());
            vehicle.setBrand(updatedVehicle.getBrand());
            vehicle.setModel(updatedVehicle.getModel());
            vehicle.setColor(updatedVehicle.getColor());
            return vehicleRepository.save(vehicle);
        }).orElseThrow(() -> new RuntimeException("Vehicle not found with the following ID: " + id));
    }

    public void deleteVehicle(@PathVariable Integer id) {
        vehicleRepository.deleteById(id);
    }
}
