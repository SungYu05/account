package site.metacoding.miniproject1;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {
	/*
	@GetMapping("/")
	public String test() {
		return "all/test";
	}
	*/
	
	@GetMapping("/users/profile")
	public String profile() {
		return "users/as_profile";
	}
}