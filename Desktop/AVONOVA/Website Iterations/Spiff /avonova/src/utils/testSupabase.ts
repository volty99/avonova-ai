import { supabase } from './supabaseClient';

export async function testSupabaseConnection() {
  try {
    // Test the connection by trying to fetch from a table
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .limit(1);
    
    if (error) {
      console.log('Supabase connection test - Error:', error.message);
      return { success: false, error: error.message };
    }
    
    console.log('Supabase connection test - Success!');
    return { success: true, data };
  } catch (error) {
    console.log('Supabase connection test - Exception:', error);
    return { success: false, error: 'Connection failed' };
  }
} 