namespace ShoppingStore.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        // קישור לקטגוריה
        public required int CategoryId { get; set; }
        public required Category Category { get; set; }
    }
}
