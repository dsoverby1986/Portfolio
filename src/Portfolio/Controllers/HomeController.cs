using System;
using System.Collections.Generic;
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

        public ActionResult Contact()
        {
            ViewBag.Message = "Contact Shane Overby";

            return View();
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

        public ActionResult Blog()
        {
            ViewBag.Message = "Shane Overby's Blog";

            return View();
        }

        public ActionResult SinglePost()
        {
            ViewBag.Message = "Single Blog Posts for Shane Overby";

            return View();
        }
    }
}