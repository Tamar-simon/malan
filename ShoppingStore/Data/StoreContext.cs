using Microsoft.EntityFrameworkCore;
using ShoppingStore.Models;

namespace ShoppingStore.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options) { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // נתוני קטגוריות ראשוניים
            modelBuilder.Entity<Category>().HasData(
                new Category { CategoryId = 1, Name = "מוצרי חלב" },
                new Category { CategoryId = 2, Name = "ירקות ופירות" }
            );
        }
    }
}
