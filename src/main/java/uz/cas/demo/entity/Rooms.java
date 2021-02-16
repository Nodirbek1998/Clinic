package uz.cas.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Rooms {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String floor;

    private String number;

    public Rooms() {
    }

    public Rooms(String floor, String number) {
        this.floor = floor;
        this.number = number;
    }
}

