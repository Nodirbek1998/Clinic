package uz.cas.demo.entity;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class Queue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    @ManyToOne
    private Users users;

    private boolean accepted;

    public Queue() {
    }

    public Queue(Users users, boolean accepted) {
        this.users = users;
        this.accepted = accepted;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public boolean isAccepted() {
        return accepted;
    }

    public void setAccepted(boolean accepted) {
        this.accepted = accepted;
    }
}
