-- Create products table for the AI Product Generator
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  price DECIMAL(10,2),
  description TEXT,
  keywords TEXT,
  generated_content JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS (Row Level Security) policies
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow all operations for now (you can restrict this later)
CREATE POLICY "Allow all operations" ON products
  FOR ALL USING (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_products_updated_at 
  BEFORE UPDATE ON products 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data for testing
INSERT INTO products (name, category, price, description, keywords, generated_content) VALUES
(
  'Avonova Organic Face Cream',
  'Skincare',
  29.99,
  'Revolutionary organic face cream with natural ingredients',
  'organic, skincare, natural, anti-aging',
  '{
    "title": "Revolutionary Organic Face Cream - Natural Anti-Aging Solution",
    "description": "Transform your skincare routine with our premium organic face cream. Formulated with natural ingredients that deeply nourish and rejuvenate your skin, leaving you with a radiant, youthful glow.",
    "features": [
      "100% Organic Ingredients",
      "Anti-Aging Properties", 
      "Suitable for All Skin Types",
      "Cruelty-Free & Vegan",
      "Dermatologist Tested"
    ],
    "benefits": [
      "Reduces fine lines and wrinkles",
      "Improves skin texture and tone", 
      "Provides deep hydration",
      "Protects against environmental damage"
    ]
  }'
); 