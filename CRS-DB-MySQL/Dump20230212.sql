-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: crs
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `complaint`
--

DROP TABLE IF EXISTS `complaint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `complaint` (
  `id` int NOT NULL,
  `address` varchar(255) NOT NULL,
  `assigned_engineer` varchar(255) DEFAULT NULL,
  `complaint` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `pin_code` int NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `state` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `is_assigned` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complaint`
--

LOCK TABLES `complaint` WRITE;
/*!40000 ALTER TABLE `complaint` DISABLE KEYS */;
INSERT INTO `complaint` VALUES (36,'5114, 4th Cross Road, City Residence','Engineer-1@110005','Unable to make a call','6265859905','Feb 8, 2023','Animesh',_binary '\0','Chatterjee',110005,'Reassigned to field workers.','New Delhi','ESCALATED','customer16_110005@abc.com',_binary ''),(37,'5114, 4th Cross Road, City Residence','Engineer-1@110005','Unable to receive a call','6265859905','Feb 8, 2023','Animesh',_binary '\0','Chatterjee',110005,'Complaint is resolved.','New Delhi','RESOLVED','customer16_110005@abc.com',_binary ''),(38,'5114, 4th Cross Road, City Residence','Engineer-1@110005','Noisy voice','6265859905','Feb 8, 2023','Animesh',_binary '\0','Chatterjee',110005,'Complaint is closed','New Delhi','RESOLVED','customer16_110005@abc.com',_binary ''),(43,'5114, 4th Cross Road, City Residence','Engineer-1@110005','Unable to make a call','6265859905','Feb 11, 2023','Animesh',_binary '\0','Chatterjee',110005,'Complaint is resolved.','New Delhi','RESOLVED','customer16_110005@abc.com',_binary ''),(45,'5114, 4th Cross Road, City Residence','Engineer-1@110005','Slow broadband speed','6265859905','Feb 11, 2023','Animesh',_binary '\0','Chatterjee',110005,'Complaint is resolved.','New Delhi','RESOLVED','customer16_110005@abc.com',_binary ''),(47,'2119, 1st Cross Road, Icon Apartments','Engineer-1@110005','No signal','6265859907','Feb 11, 2023','Anupam',_binary '\0','Jain',110005,'Complaint is resolved.','New Delhi','RESOLVED','customer14_110005@abc.com',_binary ''),(71,'5114, 4th Cross Road, Icon Residence, Ajmeri Gate Extn.','Engineer-1@110002','Unable to make a call','7898564585','Feb 12, 2023','Ayush',_binary '\0','Soni',110002,'Complaint is resolved.','New Delhi','RESOLVED','customer14_110002@abc.com',_binary ''),(73,'2119, Near RadhaSwami Satsang, South-West Delhi','Engineer-1@110004','Slow broadband speed','9857484564','Feb 12, 2023','Aditi',_binary '\0','Trivedi',110004,'Cable fault. Reassigned to field workers.','New Delhi','ESCALATED','customer8_110004@abc.com',_binary ''),(75,'2119, Near RadhaSwami Satsang, South-West Delhi',NULL,'Slow broadband speed','9857484564','Feb 12, 2023','Aditi',_binary '','Trivedi',110004,'Ticket Raised.','New Delhi','RAISED','customer8_110004@abc.com',_binary '\0'),(76,'2119, Near RadhaSwami Satsang, South-West Delhi','Engineer-1@110004','Unable to make a call','9857484564','Feb 12, 2023','Aditi',_binary '\0','Trivedi',110004,'Cable fault. Reassigned to field workers.','New Delhi','ESCALATED','customer8_110004@abc.com',_binary ''),(77,'5114, 4th Cross Road, Icon Residence, Ajmeri Gate Extn.','Engineer-1@110002','Unable to make a call','7898564585','Feb 12, 2023','Ayush',_binary '\0','Soni',110002,'Complaint is resolved.','New Delhi.','RESOLVED','customer14_110002@abc.com',_binary ''),(78,'2119, Near RadhaSwami Satsang, South-West Delhi',NULL,'Unable to make a call','9857484564','Feb 12, 2023','Aditi',_binary '','Trivedi',110004,'Ticket Raised.','New Delhi','RAISED','customer8_110004@abc.com',_binary '\0');
/*!40000 ALTER TABLE `complaint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `fid` int NOT NULL,
  `cid` int NOT NULL,
  `complaint` varchar(255) DEFAULT NULL,
  `feedback` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (40,38,'Noisy voice','Good customer service.','customer16_110005@abc.com'),(41,36,'Unable to make a call','Thanks for resolving my issue.','customer16_110005@abc.com'),(42,37,'Unable to receive a call','I am satisfied with your complaint redressal system.','customer16_110005@abc.com'),(44,43,'Unable to make a call','Please improve your network connection.','customer16_110005@abc.com'),(46,45,'Slow broadband speed','Thanks for resolving my issue.','customer16_110005@abc.com'),(48,47,'No signal','Good Service.','customer14_110005@abc.com'),(72,71,'Unable to make a call','Kindly improve your network connectivity.','customer14_110002@abc.com'),(74,73,'Slow broadband speed','Thanks for your support. My issue is resolved.','customer8_110004@abc.com');
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (79);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL,
  `role_name` varchar(255) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (101,'ADMIN'),(102,'CUSTOMER'),(104,'MANAGER'),(106,'ENGINEER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `user_role_id` int NOT NULL,
  `role_role_id` int DEFAULT NULL,
  `user_user_id` int DEFAULT NULL,
  PRIMARY KEY (`user_role_id`),
  KEY `FK7u21823ktfhu9bmx2350x6n8s` (`role_role_id`),
  KEY `FK8gqp8vkivwjo8us69ct7b35vl` (`user_user_id`),
  CONSTRAINT `FK7u21823ktfhu9bmx2350x6n8s` FOREIGN KEY (`role_role_id`) REFERENCES `roles` (`role_id`),
  CONSTRAINT `FK8gqp8vkivwjo8us69ct7b35vl` FOREIGN KEY (`user_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (2,101,1),(8,104,7),(10,106,9),(12,102,11),(16,102,15),(50,102,49),(52,104,51),(54,106,53),(56,104,55),(58,104,57),(60,104,59),(62,106,61),(64,106,63),(66,106,65),(68,102,67);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `enabled` bit(1) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `pin_code` int NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'twarit.soni@gmail.com',_binary '','Twarit','Soni','$2a$10$IPFAcd31qHcTTV0MCXLtv.J3X8aSxzsVICvFVS4XguYmX5uDI8lkK','+916265458854',110001,'ADMIN','crs-admin@abc.com'),(7,'rajesh.s88@gmail.com',_binary '','Rajesh','Soni','$2a$10$FDNvoFjWLkRkrJjOEUkF3uSHw2HYlsMX24rqV2ysG4qtpL4iXJzTW','6289748596',110005,'MANAGER','Manager@110005'),(9,'prashant.j14@gmail.com',_binary '','Prashant','Jain','$2a$10$b4rHsdTpp7RgTTSuNSmZPOu/35L6YsyR/WfKreNga4uX/v3xc2JAq','9854679856',110005,'ENGINEER','Engineer-1@110005'),(11,'anupam.m02@gmail.com',_binary '','Anupam','Jain','$2a$10$h53mU9gLpij.yJstEvUVLeklBY/pXuImi.1m4UQKfxba/gKftKUW2','7895456858',110005,'CUSTOMER','customer14_110005@abc.com'),(15,'animesh.c04@gmail.com',_binary '','Animesh','Chatterjee','$2a$10$Sv0GZRHgzbwgDPwNZHVRPeqCCQLn4ajkrvUxTclSyBA5jk3JMXgWG','6265859905',110005,'CUSTOMER','customer16_110005@abc.com'),(49,'ayush.s11@gmail.com',_binary '','Ayush','Soni','$2a$10$LBz5bjbsP69.A8SGMkFfy.jL/oyuU7RBuDOxB3RJPoHSf0B/pi3xy','7898564585',110002,'CUSTOMER','customer14_110002@abc.com'),(51,'rashi.k14@gmail.com',_binary '','Rashi','Khanna','$2a$10$0JIq./xpLU4zfthcyDv0jOwWG.I.EKJe90tsJAP0uRL5f9a2ub7yq','7898564856',110002,'MANAGER','Manager@110002'),(53,'shubham.p99@gmail.com',_binary '','Shubham','Parikh','$2a$10$o0KHgrLCEkQWXOcX1WNJxukZavJcqwWMVlmihUGjieYiyzswIkPzi','9856478459',110002,'ENGINEER','Engineer-1@110002'),(55,'prateek.s98@gmail.com',_binary '','Prateek','Soni','$2a$10$QFnekV/12sWlUxXW5snnC.1ejp1nfqZzpXvU/E/80TDqqRcQ91Ae6','6598745689',110004,'MANAGER','Manager@110004'),(57,'sumit.s78@gmail.com',_binary '','Sumit','Jain','$2a$10$qejMpdxxM.TRNvhd1X2Y..bAEy/z5EN/qazlrcFiANv8ZTWus5tHm','7895684856',110006,'MANAGER','Manager@110006'),(59,'ananya.j44@gmail.com',_binary '','Ananya','Joshi','$2a$10$lDJIBqiHk0zX4W5ad2aoze/OkdwWBIB4QFy9W2V/NIxnll2Vg9mE6','9856745685',110008,'MANAGER','Manager@110008'),(61,'aditya.d96@gmail.com',_binary '','Aditya','Dwivedi','$2a$10$DiiNAim0HcctF1gTf1KGReSoaaMjby.xN0uZfEVp.eeonlB/iMwvK','7485956847',110004,'ENGINEER','Engineer-1@110004'),(63,'mitali.d76@gmail.com',_binary '','Mitali','Dasgupta','$2a$10$yiXRKRUFQGekyZOS9PkS6.FIDBmDkIpZA5KdDGUxzq4t1hL6XGvGi','6598745865',110006,'ENGINEER','Engineer-1@110006'),(65,'vini.s88@gmail.com',_binary '','Vineeta','Singh','$2a$10$8TbkcNdcueNejhLNNzno.udGCfqAvXPS0aaCwlhT9G1RwLwdesEnW','7895684859',110008,'ENGINEER','Engineer-1@110008'),(67,'aditi.t79@gmail.com',_binary '','Aditi','Trivedi','$2a$10$zkSliQYKrozjnqNCMmh9B.3/Sf9sfJEX6Mz7wCfcHdg4LnYJ6Jwha','9857484564',110004,'CUSTOMER','customer8_110004@abc.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-12 16:41:58
