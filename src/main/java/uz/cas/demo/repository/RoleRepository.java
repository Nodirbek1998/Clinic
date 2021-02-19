package uz.cas.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.cas.demo.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
