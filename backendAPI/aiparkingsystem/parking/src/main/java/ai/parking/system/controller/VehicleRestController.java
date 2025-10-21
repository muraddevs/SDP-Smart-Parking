package ai.parking.system.controller;

import ai.parking.system.entity.User;
import ai.parking.system.entity.Vehicle;
import ai.parking.system.repository.UserRepository;
import ai.parking.system.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleRestController {

    @Autowired
    private VehicleService vehicleService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllVehicles();
    }

    @GetMapping("/{id}")
    public Vehicle getVehicleById(@PathVariable Integer id) {
        return vehicleService.getVehicleById(id);
    }

    @PostMapping
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.createVehicle(vehicle);
    }

    @PutMapping("/{id}")
    public Vehicle updateVehicle(@PathVariable Integer id, @RequestBody Vehicle vehicle) {
        return vehicleService.updateVehicle(id, vehicle);
    }

    @DeleteMapping("/{id}")
    public void deleteVehicle(@PathVariable Integer id) {
        vehicleService.deleteVehicle(id);
    }

    @PostMapping("/user/{userId}")
    public Vehicle createVehicleForUser(@PathVariable Integer userId, @RequestBody Vehicle vehicle) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));

        vehicle.setUser(user);
        return vehicleService.createVehicle(vehicle);
    }


}
