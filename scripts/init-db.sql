-- Menu Items Table
CREATE TABLE IF NOT EXISTS menu_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(500),
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reservations Table
CREATE TABLE IF NOT EXISTS reservations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  guest_count INTEGER NOT NULL,
  special_requests TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'unread',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample Menu Data
INSERT INTO menu_items (name, category, description, price) VALUES
('Grilled Salmon', 'Main Course', 'Fresh Atlantic salmon with lemon butter sauce', 28.99),
('Ribeye Steak', 'Main Course', 'Prime aged ribeye with roasted vegetables', 34.99),
('Pasta Carbonara', 'Main Course', 'Classic Italian pasta with pancetta and cream', 18.99),
('Caesar Salad', 'Starter', 'Crisp romaine with house-made Caesar dressing', 12.99),
('Bruschetta', 'Starter', 'Toasted bread with tomato, basil, and garlic', 10.99),
('Chocolate Lava Cake', 'Dessert', 'Warm chocolate cake with molten center', 8.99),
('Tiramisu', 'Dessert', 'Classic Italian dessert with mascarpone', 7.99);
