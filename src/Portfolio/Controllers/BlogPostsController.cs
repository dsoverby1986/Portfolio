using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;
using BlogPosts.Models;

namespace Portfolio.Controllers
{
    public class BlogPostsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Blogs
        public ActionResult Index()
        {
            return View(db.Posts.ToList());
        }

        // GET: Blogs/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Blog blogs = db.Posts.Find(id);
            if (blogs == null)
            {
                return HttpNotFound();
            }
            return View(blogs);
        }

        // GET: Blogs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Blogs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Created,Updated,Title,Slug,Body,MediaURL,Published")] Blog blog)
        {
            if (ModelState.IsValid)
            {
                var slug = StringUtilities.UrlFriendly(blog.Title);//variable 'slug' takes the string provided from the user from the 'title' field on the form

                if (String.IsNullOrWhiteSpace(slug))//'if' 'slug' has any whitespace or if the user didn't provide a string in the 'title' field on the form
                {
                    ModelState.AddModelError("Title", "Invalid title.");
                    return View(blog);//return the view with the message 'Invalid title' in the 'Title' field.
                }
                if (db.Posts.Any(p => p.Slug == slug))//'if' the 'Posts' database collection has a 'Slug' value that is the same as the 'slug' variable here that was provided by the user from the 'title' field of the form
                {
                    ModelState.AddModelError("Title", "The title must be unique.");
                    return View(blog);//return to the view with the message 'The title must be unique'.
                }
                else
                {
                    blog.Created = DateTimeOffset.Now;
                    blog.Slug = slug;

                    db.Posts.Add(blog);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
            }

            return View(blog);
        }

        // GET: Blogs/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Blog blog = db.Posts.Find(id);
            if (blog == null)
            {
                return HttpNotFound();
            }
            return View(blog);
        }

        // POST: Blogs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Title,Body,MediaURL,Published")] Blog blog)
        {
            if (ModelState.IsValid)
            {
                db.Posts.Attach(blog);
                blog.Updated = DateTimeOffset.Now;
              /*  db.Entry(blog).Property("Body");
                db.Entry(blog).Property("MediaURL");
                db.Entry(blog).Property("Published");*/
                db.Entry(blog).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(blog);
        }

        // GET: Blogs/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Blog blog = db.Posts.Find(id);
            if (blog == null)
            {
                return HttpNotFound();
            }
            return View(blog);
        }

        // POST: Blogs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Blog blog = db.Posts.Find(id);
            db.Posts.Remove(blog);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
