package com.example.PlaceZen.Repository;
import com.example.PlaceZen.Module.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface StudentRepository extends CrudRepository<Student,Integer> {
   // @Query()
    //public int GetProfileId(@Param("Username")int username,@Param("Password")String password);
    @Query("SELECT m.Password FROM Student m WHERE m.Roll = :Username")
    public String GetUserPassword(@Param("Username") int Username);

    @Query("SELECT m.id FROM Student m WHERE m.Roll = :Username AND m.Password=:Password")
    public Integer getId(@Param("Username") int Username, @Param("Password") String Password);

    @Query("select m.ImageName from Student m where m.id=:id")
    String getFileName(@Param("id") int id);

    @Query("select m from Student m where m.ImageName=:filename")
    Optional<Student> findByAdminImageName(@Param("filename") String filename);

    @Query("select m.Roll from Student m where m.id=:id")
    Integer findID (@Param("id") Integer id);

}
