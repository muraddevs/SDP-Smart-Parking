package ai.parking.system.service;

import ai.parking.system.entity.ParkingSlot;
import ai.parking.system.repository.ParkingSlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class ParkingSlotService {
    @Autowired
    private ParkingSlotRepository parkingSlotRepository;

    public List<ParkingSlot> getAllSlots() {
        return parkingSlotRepository.findAll();
    }

    public ParkingSlot getSlotById(@PathVariable Integer id) {
        return parkingSlotRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("No such a slot with ID: " + id));
    }

    public ParkingSlot createSlot(Integer id, @RequestBody ParkingSlot parkingSlot) {
        return parkingSlotRepository.save(parkingSlot);
    }

    public Optional<ParkingSlot> updatedSlot(@PathVariable Integer id, @RequestBody ParkingSlot updatedSlot) {
        return parkingSlotRepository.findById(id)
                .map(slot -> {
                    slot.setSlotNumber(updatedSlot.getSlotNumber());
                    slot.setLocation(updatedSlot.getLocation());
                    slot.setStatus(updatedSlot.getStatus());
                    return parkingSlotRepository.save(slot);
                    });
    }

    public void deleteSlot(@PathVariable Integer id) {
        parkingSlotRepository.deleteById(id);
    }

    public List<ParkingSlot> getAvailableSlots() {
        return parkingSlotRepository.findAll()
                .stream()
                .filter(slot -> "Available".equalsIgnoreCase(slot.getStatus()))
                .toList();
    }

}
