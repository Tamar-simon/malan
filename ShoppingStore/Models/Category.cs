namespace ShoppingStore.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public required string Name { get; set; }

        // קשרים בין קטגוריות ומוצרים
        public List<Product> Products { get; set; }
    }
}
