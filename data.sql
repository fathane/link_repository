-- Table des utilisateurs
CREATE DATABASE DB;
USE DB;

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,  -- Si tu as un système d'utilisateurs
  total_price DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  name VARCHAR(100) NOT NULL,
  surname VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  neighborhood VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  items JSON,  -- Stocke la liste des articles au format JSON
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
