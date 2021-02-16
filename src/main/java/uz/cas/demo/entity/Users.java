package uz.cas.demo.entity;

import org.hibernate.annotations.GeneratorType;

import javax.persistence.*;

@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String firstName;

    private String lastName;

    private String middleName;

    private String price;

    private String speciality;

    @Enumerated(EnumType.STRING)
    private Category category;

    @ManyToOne
    private Rooms rooms;
    @Enumerated(EnumType.STRING)
    private RoleName roleName;

    public Users() {
    }

    public Users(String firstName,
                 String lastName,
                 String middleName,
                 String price,
                 String speciality,
                 Category category,
                 Rooms rooms,
                 RoleName roleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.price = price;
        this.speciality = speciality;
        this.category = category;
        this.rooms = rooms;
        this.roleName = roleName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Rooms getRooms() {
        return rooms;
    }

    public void setRooms(Rooms rooms) {
        this.rooms = rooms;
    }

    public RoleName getRoleName() {
        return roleName;
    }

    public void setRoleName(RoleName roleName) {
        this.roleName = roleName;
    }
}
