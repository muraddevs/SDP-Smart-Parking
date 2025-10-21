package ai.parking.system.controller;

import ai.parking.system.entity.ParkingSlot;
import ai.parking.system.service.ParkingSlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(name = "/api/slots")
public class ParkingSlotRestController {

    @Autowired
    private ParkingSlotService parkingSlotService;

    @GetMapping
    public List<ParkingSlot> getAllSlots() {
        return parkingSlotService.getAllSlots();
    }

    @GetMapping("/{id}")
    public ParkingSlot getSlotById(@PathVariable Integer id) {
        return parkingSlotService.getSlotById(id);
    }

    @PostMapping
    public ParkingSlot createSlot(@PathVariable Integer id, @RequestBody ParkingSlot parkingSlot) {
        return parkingSlotService.createSlot(id, parkingSlot);
    }

    @PutMapping("/{id}")
    public Optional<ParkingSlot> updateSlot(@PathVariable Integer id, @RequestBody ParkingSlot parkingSlot) {
        return parkingSlotService.updatedSlot(id, parkingSlot);
    }

    @DeleteMapping("/{id}")
    public void deleteSlot(@PathVariable Integer id) {
        parkingSlotService.deleteSlot(id);
    }

    @GetMapping("/available")
    public List<ParkingSlot> getAvailableSlots() {
        return parkingSlotService.getAvailableSlots();
    }

}