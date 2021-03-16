package uz.cas.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import uz.cas.demo.service.QueueService;

@Controller
@RequestMapping("/api/queue")
@CrossOrigin("*")
public class QueueController {

    @Autowired
    private QueueService queueService;

    @GetMapping("/{id}")
    public HttpEntity<?> getQueue(@PathVariable Integer id){
        return ResponseEntity.ok(queueService.getAll(id));
    }

    @PutMapping("/{id}")
    public HttpEntity<?> paid(@PathVariable Long id){
        queueService.paid(id);
        return ResponseEntity.ok(true);
    }
}
