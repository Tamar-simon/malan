using Microsoft.EntityFrameworkCore;
using ShoppingStore.Data; // ����� �-namespace �� �-DbContext ���

var builder = WebApplication.CreateBuilder(args);

// ����� ������ �-DbContext
builder.Services.AddDbContext<StoreContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers(); // ����� ������ �-Controllers

var app = builder.Build();

// ����� ������ ���������
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

app.MapControllers(); // ��� �� �-Controllers

app.Run();
