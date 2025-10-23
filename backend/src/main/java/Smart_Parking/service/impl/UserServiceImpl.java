package Smart_Parking.service.impl;

import Smart_Parking.dto.UserCreateDto;
import Smart_Parking.dto.UserInfoDto;
import Smart_Parking.entity.User;
import Smart_Parking.mapper.UserMapper;
import Smart_Parking.repository.UserRepository;
import Smart_Parking.service.interfaces.UserService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public List<UserInfoDto> findAll() {
        return userRepository.findAll().stream()
                .map(userMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<UserInfoDto> findById(Long id) {
        return userRepository.findById(id).map(userMapper::toDTO);
    }

    @Override
    public Optional<UserInfoDto> findByUsername(String username) {
        return userRepository.findByUsername(username).map(userMapper::toDTO);
    }

    @Override
    public Optional<UserInfoDto> findByEmail(String email) {
        return userRepository.findByEmail(email).map(userMapper::toDTO);
    }

    @Override
    public boolean existsById(Long id) {
        return userRepository.existsById(id);
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public User save(UserCreateDto user) {
        return userRepository.save(userMapper.toEntity(user));
    }

    @Override
    public void delete(UserInfoDto user) {
        User existingUser = userRepository.findById(user.getId())
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        userRepository.delete(existingUser);
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

}
