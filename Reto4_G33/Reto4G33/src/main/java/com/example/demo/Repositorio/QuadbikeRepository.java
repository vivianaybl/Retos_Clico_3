/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Repositorio;

import org.springframework.stereotype.Repository;
import com.example.demo.Modelo.Quadbike;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.Interface.QuadbikeInterface;
/**
 *
 * @author USUARIO
 */

@Repository

public class QuadbikeRepository {
     @Autowired
    private QuadbikeInterface quadbikeCrudRepository;
    
    public List<Quadbike> getAll(){
        return (List<Quadbike>) quadbikeCrudRepository.findAll();
    }
    
    public Optional<Quadbike> getQuadbike(int id){
        return quadbikeCrudRepository.findById(id);
    }
    
    public Quadbike save(Quadbike quadbike){
        return quadbikeCrudRepository.save(quadbike);
    }
    
    public void delete(Quadbike quadbike){
        quadbikeCrudRepository.delete(quadbike);                      
    }
}
