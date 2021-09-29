package com.app.springboot.homechefDemo.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.springboot.homechefDemo.dao.SpecialityRepository;
import com.app.springboot.homechefDemo.entity.Chef;
import com.app.springboot.homechefDemo.entity.Speciality;

@Service
public class SpecialityServiceImp implements SpecialityService {
	
	@Autowired
	SpecialityRepository specialityRepository;
	
	@Autowired 
	private Environment env; 
	
	public SpecialityServiceImp(SpecialityRepository specialityRepository)
	{
		super();
		this.specialityRepository=specialityRepository;
		
	}

	@Override
	public List<Speciality> findAll() {
		// TODO Auto-generated method stub
		return specialityRepository.findAll();
	}

	@Override
	public int getSpecialityCount() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Chef findById(int cuisineid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void save(Chef theSpeciality) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteById(int cuisineid) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateSpeciality(int cuisineid, Speciality cd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Speciality> getSpecialitybychefid(int chefid) {
			List <Speciality> speciality = specialityRepository.getSpecialitybychefid(chefid);
			speciality.forEach(l -> System.out.println(l));
			return speciality;
		}

	@Override
	public void saveFile(int cuisineid, String fileName, MultipartFile multipartFile) throws IOException {
		String uploadDir = env.getProperty("fileuploadPath") + cuisineid;
		Path uploadPath = Paths.get(uploadDir);
        
        if (!Files.exists(uploadPath)) {
            try {
				Files.createDirectories(uploadPath);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        }
         
        try (InputStream inputStream = multipartFile.getInputStream()) {
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException ioe) {        
            throw new IOException("Could not save image file: " + fileName, ioe);
        }      
		
	}

	@Override
	public void updateSpecialityImage(int cuisineid, String fileName) {
		specialityRepository.updateSpecialityImage(cuisineid,fileName);
		
	}

	@Override
	public String findSpecialityImageById(int cuisineid) {
		
		String specialityimagename= specialityRepository.findSpecialityImageById(cuisineid);
		if (specialityimagename == null) return null;
			
		return env.getProperty("fileViewPath") + cuisineid + "/" + specialityimagename;
		
	}

	

}
