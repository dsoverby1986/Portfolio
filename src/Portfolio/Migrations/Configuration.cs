namespace Portfolio.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Portfolio.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    
    

    internal sealed class Configuration : DbMigrationsConfiguration<Portfolio.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(Portfolio.Models.ApplicationDbContext context)
        {
            var roleManager = new RoleManager<IdentityRole>(
                new RoleStore<IdentityRole>(context));

            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                roleManager.Create(new IdentityRole { Name = "Admin" });
            }

            var userManager = new UserManager<ApplicationUser>(
                new UserStore<ApplicationUser>(context));

            if (!context.Users.Any(u => u.Email == "dsoverby1986@gmail.com"))
            {
                userManager.Create(new ApplicationUser
                    {
                        UserName = "dsoverby1986@gmail.com",
                        Email = "dsoverby1986@gmail.com",
                        FirstName = "Shane",
                        LastName = "Overby",
                        DisplayName = "admin"
                    }, "Password1!");
            }

            var userId = userManager.FindByEmail("dsoverby1986@gmail.com").Id;
            userManager.AddToRole(userId, "Admin");

            if (!context.Roles.Any(r => r.Name == "Moderator"))
            {
                roleManager.Create(new IdentityRole { Name = "Moderator" });
            }

            var userModerator = new UserManager<ApplicationUser>(
                new UserStore<ApplicationUser>(context));

            if (!context.Users.Any(u => u.Email == "moderator@coderfoundry.com"))
            {
                userModerator.Create(new ApplicationUser
                    {
                        UserName = "moderator@coderfoundry.com",
                        Email = "moderator@coderfoundry.com",
                        FirstName = "Coder",
                        LastName = "Foundry",
                        DisplayName = "moderator"
                    }, "Password2!");
            }

            var userId2 = userModerator.FindByEmail("moderator@coderfoundry.com").Id;
            userModerator.AddToRole(userId2, "Moderator");
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
