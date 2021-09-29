-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: homechef
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `username` varchar(10) NOT NULL,
  `password` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('admin','admin123');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chefdetails`
--

DROP TABLE IF EXISTS `chefdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chefdetails` (
  `chefid` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `address` varchar(120) DEFAULT NULL,
  `city` varchar(10) DEFAULT NULL,
  `emailid` varchar(45) NOT NULL,
  `password` varchar(200) DEFAULT NULL,
  `cuisineid` int DEFAULT NULL,
  `contactnumber` bigint DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  `chefimagename` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`chefid`,`emailid`),
  KEY `cuisineid_idx` (`cuisineid`),
  CONSTRAINT `cuisineid` FOREIGN KEY (`cuisineid`) REFERENCES `speciality` (`cuisineid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chefdetails`
--

LOCK TABLES `chefdetails` WRITE;
/*!40000 ALTER TABLE `chefdetails` DISABLE KEYS */;
INSERT INTO `chefdetails` VALUES (1,'Yash','Jeurkar','Bhugaon','Pune','yash@gmail.com','yash123',1,1234567890,'active','1632704787398-1.jpg','we'),(2,'Rasika','Karde','Kothrud','Pune','rasika@gmail.com','rasika123',2,1234567890,'active','1632704798202-2.jpg',NULL),(3,'Soham','Karder','Kamatwade','Nashik','soham@gmail.com','soham123',3,1234567890,'active','1632704813855-3.jpg',NULL),(4,'Kavita','Bramhankar','Sus','Pune','kavita@gmail.com','kavita123',4,1234567890,'active','1632704831414-4.jpg',NULL),(19,'Renuka','Petkar','Faltan','Faltan','renuka@gmail.com','renuka123',5,1234567890,'active','1632704851311-19.jpg',NULL),(21,'Archana','Sapkal','Nagpur','Nagpur','archana@gmail.com','archana123',6,12345,'active','1632704867734-21.jpg',NULL),(22,'Rohit','Sharma','Ghatkopar','Mumbai','rohit@gmail.com','rohit123',7,123456,'active','1632704904426-22.jpg',NULL),(24,'Virat','Kohli','Banglore','Banglore','virat@gmail.com','virat123',8,23456,NULL,'1632704935753-24.jpg',NULL),(26,'Kirti','Sanon','Banglore','Banglore','kirti@gmail.com','12345',2,1234567890,NULL,'1632704953396-26.jpg',NULL),(27,'Jerry','George','Solapur','Solapur','jerry@gmail.com','rasika123',7,123456,NULL,'1632704968178-27.jpg',NULL);
/*!40000 ALTER TABLE `chefdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `menuid` int NOT NULL,
  `chefid` int NOT NULL,
  `cuisineid` int DEFAULT NULL,
  `menuname` varchar(45) DEFAULT NULL,
  `description` varchar(120) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`menuid`),
  KEY `chef_id2_idx` (`chefid`),
  KEY `cuisine_idf_idx` (`cuisineid`),
  CONSTRAINT `chef_id2` FOREIGN KEY (`chefid`) REFERENCES `chefdetails` (`chefid`),
  CONSTRAINT `cuisine_idf` FOREIGN KEY (`cuisineid`) REFERENCES `speciality` (`cuisineid`),
  CONSTRAINT `cuisineidf1` FOREIGN KEY (`cuisineid`) REFERENCES `chefdetails` (`cuisineid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,1,1,'Veg Puff','1 unit',20,NULL),(2,1,1,'Manchurian Puff','1 unit',25,NULL),(3,1,1,'Veg Donuts','1 unit',15,NULL),(4,1,1,'Wheat Biscuits','250 gm',70,NULL),(5,1,1,'Shrewberry Biscuits','250 gm',90,NULL),(6,2,2,'Idli Sambhar/Chutney','2 Idalis+chutney+sambhar',30,NULL),(7,26,2,'Dosa','Dosa+chutney+sambhar',50,NULL),(8,2,2,'Uttapa','Uttapa+chutney+sambhar',50,NULL),(9,3,3,'Pav Bhaji','2 Pav+ bhaji',90,NULL),(10,3,3,'Misal Pav','2 pav+ misal + dahi + papad',90,NULL),(11,3,3,'Vada Pav','2 vada + 2 pav',25,NULL),(12,3,3,'Kande Pohe','1 plate',25,NULL),(13,4,4,'Khandavi','1 plate',35,NULL),(14,4,4,'Jalebi + fafda','1 plate',40,NULL),(15,4,4,'Khaman Dhokla','250 gm',45,NULL),(16,4,4,'Handvo','250 gm',50,NULL),(17,4,4,'Undhiyu ( Seasonal )','250 gm',90,NULL),(18,19,5,'Aloo Paratha','1 plate + dahi',50,NULL),(19,19,5,'Paneer Pasanda','1 plate',150,NULL),(20,19,5,'Cheese Naan','1',40,NULL),(21,19,5,'Chole Kulche','2 Kulcha',100,NULL),(22,19,5,'Cheese Onion Paratha','1',90,NULL),(23,21,6,'Veg Margarita Pizza','1 Pizza',150,NULL),(24,21,6,'Veg Paneer Tikka Pizza','1 Pizza',170,NULL),(25,21,6,'Veg Farmhouse Pizza','1 Pizza',180,NULL),(26,21,6,'Cheese Loaded Pizza','1 Pizza',190,NULL),(27,21,6,'Mexicana Pizza','1 Pizza',200,NULL),(28,22,7,'Veg Manchurian Dry / Gravy','1 Plate',120,NULL),(29,27,7,'Veg Fried Rice','1 Plate',150,NULL),(30,27,7,'Veg Schezwan Noodles','1 plate',150,NULL),(31,24,8,'Black Forest Cake','500 gm',300,NULL),(32,24,8,'Red Velvet Cake','500 gm',450,NULL),(33,24,8,'Butterscotch Cake','500 gm',350,NULL),(34,24,8,'Pineapple Cake','500 gm',350,NULL),(35,24,8,'Dark Chocolate Cake','500 gm',400,NULL);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `speciality`
--

DROP TABLE IF EXISTS `speciality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `speciality` (
  `cuisineid` int NOT NULL AUTO_INCREMENT,
  `cuisinetype` varchar(45) DEFAULT NULL,
  `chefid` int DEFAULT NULL,
  `specialityimagename` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cuisineid`),
  KEY `chef_id1_idx` (`chefid`),
  CONSTRAINT `chef_id1` FOREIGN KEY (`chefid`) REFERENCES `chefdetails` (`chefid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `speciality`
--

LOCK TABLES `speciality` WRITE;
/*!40000 ALTER TABLE `speciality` DISABLE KEYS */;
INSERT INTO `speciality` VALUES (1,'Bakery',1,'1632705043653-1.jpg'),(2,'South Indian',2,'1632705073263-2.jpg'),(3,'Maharashtrian',3,'1632705092980-3.jpg'),(4,'Gujarati',4,'1632705112176-4.jpg'),(5,'Punjabi',19,'1632705141501-5.jpg'),(6,'Pizza',21,'1632705158309-6.jpg'),(7,'Chinese',22,'1632705176268-7.jpg'),(8,'Cakes',24,'1632705192720-8.jpg');
/*!40000 ALTER TABLE `speciality` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-29 11:12:42
