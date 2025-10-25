package Smart_Parking.service.interfaces;

import Smart_Parking.dto.UserCreateDto;
import Smart_Parking.dto.UserInfoDto;
import Smart_Parking.entity.User;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<UserInfoDto> findAll();
    Optional<UserInfoDto> findByEmail(String email);
    Optional<UserInfoDto> findByUsername(String username);
    Optional<UserInfoDto> findById(Long id);
    Optional<UserInfoDto> findByCarLicensePlate(String licensePlate);


    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsById(Long id);

    User save(UserCreateDto user);
    void delete(UserInfoDto user);
    void deleteById(Long id);
}
