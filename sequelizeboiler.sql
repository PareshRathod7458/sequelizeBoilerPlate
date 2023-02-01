-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2023 at 06:46 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sequelizeboiler`
--

-- --------------------------------------------------------

--
-- Table structure for table `addressdata`
--

CREATE TABLE `addressdata` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `country` enum('india','maldives','congo','germany') DEFAULT NULL,
  `state` enum('gujarat','goa','punjab','rajasthan') DEFAULT NULL,
  `city` enum('navsari','ahmedabad','surat','gandhinagar') DEFAULT NULL,
  `pincode` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `addressdata`
--

INSERT INTO `addressdata` (`id`, `title`, `address1`, `address2`, `country`, `state`, `city`, `pincode`) VALUES
(1, 'knfns', 'mknsk', 'kcks', 'india', 'gujarat', 'ahmedabad', '383315'),
(2, 'knfns', 'mknsk', 'kcks', 'india', 'gujarat', 'ahmedabad', '383315'),
(3, 'sd', 'asd', 'wer', 'india', 'gujarat', 'ahmedabad', '383315'),
(4, 'knfns', 'mknsk', 'kcks', 'india', 'gujarat', 'ahmedabad', '383315'),
(5, 'sd', 'asd', 'wer', 'india', 'gujarat', 'ahmedabad', '383315'),
(6, 'sd', 'asd', 'wer', 'india', 'gujarat', 'ahmedabad', '383315');

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `uploadImage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`id`, `name`, `email`, `gender`, `password`, `uploadImage`) VALUES
(1, 'ajay', 'pareshrathod0112@gmail.com', 'male', '$2b$10$XKMdNjsSR3kyfKeDRwrdH.QnnqjQGATUXiJutXuAz/j1NiTINanaK', 'uploadImage-1675168230586');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addressdata`
--
ALTER TABLE `addressdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addressdata`
--
ALTER TABLE `addressdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
