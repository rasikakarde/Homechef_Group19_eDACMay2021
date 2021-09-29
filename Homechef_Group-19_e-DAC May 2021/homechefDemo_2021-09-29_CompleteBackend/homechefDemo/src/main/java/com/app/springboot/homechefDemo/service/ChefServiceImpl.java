 package com.app.springboot.homechefDemo.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.springboot.homechefDemo.dao.ChefRepository;
import com.app.springboot.homechefDemo.dao.MenuRepository;
import com.app.springboot.homechefDemo.dto.ChefCityDto;
import com.app.springboot.homechefDemo.dto.ChefMenuDto;
import com.app.springboot.homechefDemo.entity.Chef;
import com.app.springboot.homechefDemo.entity.Menu;


@Service
public class ChefServiceImpl implements ChefService {

	@Autowired
	private ChefRepository chefRepository;
	
	@Autowired 
	private Environment env; 
	
	
	
	public ChefServiceImpl(ChefRepository chefRepository)
	{
		super();
		this.chefRepository=chefRepository;
		
	}
	
	@Override
	public List<Chef> findAll() {
		// TODO Auto-generated method stub
		return chefRepository.findAll();
		//return null;
	}

	@Override
	public int getChefCount() {
		// TODO Auto-generated method stub
		return chefRepository.getChefCount();
	}

	@Override
	public Chef findById(int chefid) {
		// TODO Auto-generated method stub
		Optional<Chef> c=chefRepository.findById(chefid);
		Chef chef=c.get();
		return chef;
	}

	
	@Override
	public Chef save(Chef theChef) {
		return chefRepository.save(theChef);
	}

	@Override
	public void deleteById(int chefid) {
		// TODO Auto-generated method stub
		Optional<Chef> c=Optional.empty();
//		Optional<Object> chef=c.empty();
//		return null;
		chefRepository.deleteById(chefid);
		
	}
	
	@Override
	public Chef updateChef(int chefid, Chef cd) {
		// TODO Auto-generated method stub
		Chef chf = chefRepository.findById(chefid).get();
	      
	        System.out.println(chf.toString());
	        chf.setFirstname(cd.getFirstname());
	        chf.setLastname(cd.getLastname());
	        chf.setAddress(cd.getAddress());
	        chf.setEmailid(cd.getEmailid());
	        chf.setCity(cd.getCity());
	        chf.setContactnumber(cd.getContactnumber());
	        return chefRepository.save(chf);
	}

	public List<ChefMenuDto> getAllChefDetailsById(int chefid) {
		// TODO Auto-generated method stub
		List<ChefMenuDto> chefmenu= chefRepository.getAllChefDetailsById(chefid);
		//Optional<Chef> chef =chefRepository.findById(chefid);
		chefmenu.forEach(l -> System.out.println(l));
		return chefmenu;
		
	}

	@Override
	public void saveFile(int chefid, String fileName, MultipartFile multipartFile) throws IOException {
		String uploadDir = env.getProperty("fileuploadPath") + chefid;
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
	public void updateChefImage(int chefid, String fileName) {
		chefRepository.updateChefImage(chefid,fileName);
		
	}

	@Override
	public String findChefImageById(int chefid) {
		
		String chefimagename= chefRepository.findChefImageById(chefid);
		if (chefimagename == null) return null;
			
		return env.getProperty("fileViewPath") + chefid + "/" + chefimagename;
		
	}

	@Override
	public List<Chef> getChefByCity(String city) {
		List <Chef> chef = chefRepository.getChefByCity(city);
		return chef;
	}
	
	@Override
	public List<Chef> getChefByCuisineid(int cuisineid) {
		List <Chef> chef = chefRepository.getChefByCuisineid(cuisineid);
		return chef;
	}
	
	

	@Override
	public Chef validateUser(Chef cheflogin) {
		// TODO Auto-generated method stub
		
		return chefRepository.getUserByLoginDetail(cheflogin.getEmailid(), cheflogin.getPassword());
	}

	

	/*@Override
	public Chef validateUser(Chef cheflogin) {
		// TODO Auto-generated method stub
		return chefRepository.findById(cheflogin.getEmailid()).get();
	}*/
}