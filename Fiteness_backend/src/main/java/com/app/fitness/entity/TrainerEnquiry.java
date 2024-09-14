package com.app.fitness.entity;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "trainer_enquiry")
public class TrainerEnquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trainer_enquiry_id")
    private int trainerEnquiryId;

    @Column(name = "trainer_id", nullable = false)
    private int trainerId;

    @Column(name = "enqid", nullable = false)
    private int enquiryId;

    @Column(name = "assigned_date", nullable = false)
    private LocalDate assignedDate;

    // Getters and Setters

    public Integer getTrainerEnquiryId() {
        return trainerEnquiryId;
    }

    public void setTrainerEnquiryId(Integer trainerEnquiryId) {
        this.trainerEnquiryId = trainerEnquiryId;
    }

    public Integer getTrainerId() {
        return trainerId;
    }

    public void setTrainerId(Integer trainerId) {
        this.trainerId = trainerId;
    }

    public Integer getEnquiryId() {
        return enquiryId;
    }

    public void setEnquiryId(Integer enquiryId) {
        this.enquiryId = enquiryId;
    }

    public LocalDate getAssignedDate() {
        return assignedDate;
    }

    public void setAssignedDate(LocalDate assignedDate) {
        this.assignedDate = assignedDate;
    }

    
}
