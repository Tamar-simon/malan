using Microsoft.EntityFrameworkCore;
using ShoppingStore.Data; // הוספת ה-namespace של ה-DbContext שלך

var builder = WebApplication.CreateBuilder(args);

// הוספת שירותי ה-DbContext
builder.Services.AddDbContext<StoreContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers(); // הוספת שירותי ה-Controllers

var app = builder.Build();

// קביעת תצורות האפליקציה
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

app.MapControllers(); // מפה את ה-Controllers

app.Run();
