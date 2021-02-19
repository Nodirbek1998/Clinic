package uz.cas.demo.peyload;

import uz.cas.demo.entity.Rooms;
import uz.cas.demo.entity.enums.Category;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;

public class ReqUsers {

    private String firstName;

    private String lastName;

    private String middleName;

    private String price;

    private String speciality;
    private String username;
    private String password;
    @Enumerated(EnumType.STRING)
    private Category category;

    private Integer rooms;

    public ReqUsers() {
    }

    public ReqUsers(String firstName, String lastName,
                    String middleName, String price,
                    String speciality, String username,
                    String password, Category category, Integer rooms) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.price = price;
        this.speciality = speciality;
        this.username = username;
        this.password = password;
        this.category = category;
        this.rooms = rooms;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Integer getRooms() {
        return rooms;
    }

    public void setRooms(Integer rooms) {
        this.rooms = rooms;
    }
}
