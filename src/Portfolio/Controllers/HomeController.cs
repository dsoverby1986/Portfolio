using Microsoft.AspNet.Identity;
using Portfolio.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "About Shane Overby";

            return View();
        }

        public ActionResult Contact()////////////////////////////////////////////////////////////////////////////////
        {
            ViewBag.Message = "Contact Shane Overby";
            //ViewBag.Messagesent = TempData["MessageSent"];
            return View();
        }////////////////////////////////////////////////////////////////////////////////////////////////////////////

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Contact(ContactMessage form)
        {
            if (!ModelState.IsValid)
            {
                return View(form);
            }

            var emailer = new EmailService();

            var mail = new IdentityMessage(){
                Destination = ConfigurationManager.AppSettings["PersonalEmail"],
                Subject = form.Subject,
                Body = "You have received a new contact form submission from" + form.Name + "(" + form.FromEmail + ") with the following contents:<br /><br /><br />" + form.Message
            };

            emailer.SendAsync(mail);

            //TempData["MessageSent"] = "Your message has been delivered successfully.";
            ViewBag.Messagesent = "Your message has been delivered successfully.";
            return View();
            //return RedirectToAction("Contact");

           /* ViewBag.Message = "Contact Shane Overby";

            return View();*/
        }

        public ActionResult Portfolio()
        {
            ViewBag.Message = "Shane Overby's Portfolio";

            return View();
        }

        public ActionResult Resume()
        {
            ViewBag.Message = "Shane Overby's Resume";

            return View();
        }

        public ActionResult SinglePost()
        {
            ViewBag.Message = "Single Blog Posts for Shane Overby";

            return View();
        }

        public ActionResult Blog()
        {
            ViewBag.Message = "Shane Overby's Blog";

            return View();
        }
    }
}