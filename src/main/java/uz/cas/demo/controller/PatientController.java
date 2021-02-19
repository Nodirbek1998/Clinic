package uz.cas.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import uz.cas.demo.entity.Patient;
import uz.cas.demo.peyload.ReqPatient;
import uz.cas.demo.service.PatientService;

@Controller
@RequestMapping("/api/patient")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping
    public HttpEntity<?> addPatient(@RequestBody ReqPatient reqPatient){
        ResponseEntity<?> responseEntity = patientService.addPatient(reqPatient);
        return ResponseEntity.ok(responseEntity);
    }

}
