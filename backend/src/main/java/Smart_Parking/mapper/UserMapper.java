package Smart_Parking.mapper;

import Smart_Parking.dto.UserCreateDto;
import Smart_Parking.dto.UserInfoDto;
import Smart_Parking.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;


@Mapper(
    componentModel = "spring",
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    unmappedTargetPolicy = ReportingPolicy.IGNORE
)
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserInfoDto toDTO(User user);

    @Mapping(target = "id", ignore = true) // ID is auto-generated
    User toEntity(UserCreateDto userCreateDto);

    void updateFromDto(UserCreateDto userCreateDto, @MappingTarget User user);

    void updateFromDto(UserInfoDto userInfoDto, @MappingTarget User user);
}

