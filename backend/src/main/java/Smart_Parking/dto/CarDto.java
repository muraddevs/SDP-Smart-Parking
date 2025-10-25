package Smart_Parking.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CarDto {

    private Long id;

    @NotBlank(message = "Brand is required")
    @Size(max = 50, message = "Brand name must be at most 50 characters")
    private String brand;

    @NotBlank(message = "Model is required")
    @Size(max = 50, message = "Model name must be at most 50 characters")
    private String model;

    @NotNull(message = "Year is required")
    @Min(value = 1950, message = "Year must be no earlier than 1950")
    @Max(value = 2100, message = "Year must be reasonable")
    private Integer year;

    @NotBlank(message = "Color is required")
    @Size(max = 30, message = "Color name must be at most 30 characters")
    private String color;

    @NotBlank(message = "License plate is required")
    @Pattern(
            regexp = "^\\d{2}[A-Z]{2}\\d{3}$",
            message = "License plate must match format like 10AA100"
    )
    private String licensePlate;

    @NotNull(message = "User ID is required")
    private Long userId;

}
