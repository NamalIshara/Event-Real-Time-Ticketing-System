package com.example.Real_Time_Ticketing_System_BE.Service;

import com.example.Real_Time_Ticketing_System_BE.Entity.user;
import com.example.Real_Time_Ticketing_System_BE.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public user loggedIn(user userEntity) {
        try {
            user foundUser = userRepo.findByEmail(userEntity.getEmail());
            if (foundUser != null) {
               if (foundUser.getPassword().equals(userEntity.getPassword())) {
                   return foundUser;
               }else {
                   return null;
               }
            }
            return null;
        }catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }

    }

    public user Sign(user userEntity) {
        try{
            if (!userRepo.existsByEmail(userEntity.getEmail())){
                userRepo.save(userEntity);
                return  userRepo.findByEmail(userEntity.getEmail());
            }else {
                return null;
            }
        }catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }

    }
}
