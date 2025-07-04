import { supabase } from './supabaseClient';

export interface Product {
  id?: string;
  name: string;
  category?: string;
  price?: number;
  description?: string;
  keywords?: string;
  generated_content?: any;
  created_at?: string;
  updated_at?: string;
}

export interface GeneratedContent {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

export const productService = {
  // Get all products
  async getAllProducts(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Get a single product by ID
  async getProduct(id: string): Promise<Product | null> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Create a new product
  async createProduct(product: Product): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .insert([product])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update a product
  async updateProduct(id: string, updates: Partial<Product>): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete a product
  async deleteProduct(id: string): Promise<void> {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Save generated content for a product
  async saveGeneratedContent(productId: string, content: GeneratedContent): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .update({ generated_content: content })
      .eq('id', productId)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
}; 