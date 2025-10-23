package Smart_Parking.dto;

import Smart_Parking.enums.UserRoles;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserInfoDto {
    private Long id;
    private String name;
    private String email;
    private UserRoles role;
}
