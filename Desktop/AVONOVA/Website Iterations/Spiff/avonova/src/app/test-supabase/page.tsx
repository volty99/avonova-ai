"use client";

import { useState, useEffect } from 'react';
import { productService, Product } from '../../utils/productService';
import { testSupabaseConnection } from '../../utils/testSupabase';

export default function TestSupabasePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<string>('Testing...');

  useEffect(() => {
    // Test connection first
    testSupabaseConnection().then(result => {
      if (result.success) {
        setConnectionStatus('✅ Connected to Supabase!');
        // Then load products
        loadProducts();
      } else {
        setConnectionStatus(`❌ Connection failed: ${result.error}`);
        setLoading(false);
      }
    });
  }, []);

  const loadProducts = async () => {
    try {
      const data = await productService.getAllProducts();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load products');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Supabase Connection Test</h1>
        
        {/* Connection Status */}
        <div className="mb-8 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <h2 className="text-lg font-semibold mb-2">Connection Status</h2>
          <p className="text-[var(--text-secondary)]">{connectionStatus}</p>
        </div>

        {/* Products List */}
        <div className="bg-[var(--surface)] rounded-lg border border-[var(--border)] p-6">
          <h2 className="text-xl font-bold mb-4">Products from Database</h2>
          
          {loading && (
            <p className="text-[var(--text-secondary)]">Loading products...</p>
          )}
          
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">Error: {error}</p>
            </div>
          )}
          
          {!loading && !error && products.length === 0 && (
            <p className="text-[var(--text-secondary)]">No products found in database.</p>
          )}
          
          {!loading && !error && products.length > 0 && (
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="p-4 border border-[var(--border)] rounded-lg">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-[var(--text-secondary)] mb-2">{product.category} - ${product.price}</p>
                  <p className="text-sm">{product.description}</p>
                  {product.generated_content && (
                    <div className="mt-2 p-2 bg-[var(--background)] rounded text-sm">
                      <strong>Generated Title:</strong> {product.generated_content.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 