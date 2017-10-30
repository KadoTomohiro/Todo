using Microsoft.AspNetCore.Mvc;

namespace WebClient.Controllers
{
  public class HomeController : Controller
  {
    // GET
    public IActionResult Index() => File("/index.html", "text/html");
  }
}
