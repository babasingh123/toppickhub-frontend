class Api {
    static baseUrl = 'http://localhost:5000';  // Base URL for JSON Server
  
    // Fetch categories
    static async getCategories() {
      try {
        const response = await fetch(`${this.baseUrl}/categories`);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;  // Re-throw error to handle in component if needed
      }
    }
  
    // Fetch items for a specific subcategory by slug
    static async getItemsBySubcategory(subcategorySlug) {
      try {
        const response = await fetch(`${this.baseUrl}/categories`)
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const categories = await response.json();
        const category = categories.find(c => c.subcategories.some(sub => sub.slug === subcategorySlug));
        const subcategory = category.subcategories.find(sub => sub.slug === subcategorySlug);
        return subcategory.items;
      } catch (error) {
        console.error('Error fetching items for subcategory:', error);
        throw error;
      }
    }
  
    // Add more methods as necessary for fetching data like subcategories, items, etc.
  }
  
  export default Api;
  