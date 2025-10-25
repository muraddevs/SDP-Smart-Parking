package Smart_Parking.dto;

import Smart_Parking.enums.UserRoles;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserInfoDto {

    @NotNull(message = "ID is required")
    private Long id;

    @NotBlank(message = "Name is required")
    @Size(max = 50, message = "Name must be at most 50 characters long")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Email must be valid (e.g., user@example.com)")
    private String email;

    @NotNull(message = "Role is required")
    private UserRoles role;

    private List<CarDto> cars;

}
