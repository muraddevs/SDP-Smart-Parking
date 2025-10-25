package Smart_Parking.mapper;

import Smart_Parking.dto.CarDto;
import Smart_Parking.dto.UserInfoDto;
import Smart_Parking.entity.Car;
import Smart_Parking.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Named;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

@Mapper(
        componentModel = "spring",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        unmappedTargetPolicy = ReportingPolicy.IGNORE
)
public interface CarMapper {

    Car toEntity(CarDto carDto);

    CarDto toDto(Car car);

    @Mapping(target = "user", ignore = true)
    Car toEntity(CarDto carDto, @MappingTarget Car car);

    @Mapping(target = "cars", ignore = true)
    User toEntity(UserInfoDto userInfoDto, @MappingTarget User user);

    void updateFromDto(CarDto carDto, @MappingTarget Car car);

    void updateFromDto(UserInfoDto userInfoDto, @MappingTarget User user);
}
