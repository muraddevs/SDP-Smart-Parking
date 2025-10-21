package ai.parking.system.service;

import ai.parking.system.entity.User;
import ai.parking.system.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(@PathVariable Integer id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found with following ID: " + id));
    }

    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    public User updateUser(@PathVariable Integer id, @RequestBody User updatedUser) {
        return userRepository.findById(id).map(user -> {
                    user.setUserName(updatedUser.getUserName());
                    user.setFaculty(updatedUser.getFaculty());
                    user.setIdNumber(updatedUser.getIdNumber());
                    user.setEmail(updatedUser.getEmail());
                    user.setPassword(updatedUser.getPassword());
                    return userRepository.save(user);
                }).orElseThrow(() -> new RuntimeException("User not found with the following ID: " + id));
    }

    public void deleteUser(Integer id){
        userRepository.deleteById(id);
    }
}
