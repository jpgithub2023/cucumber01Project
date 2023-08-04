package steps;




import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefination extends TestBase {
	
	LoginPage loginPage;
	
	
	/*@Test
	 * public void loginTest() throws Throwable{
	 * loginPageObj.enterUserName("demo@techfios.com");
	 * loginPageObj.enterPassword("abc123");
	 * loginPageObj.clickSignInButton();
	 * takeScreenshot(driver);
	 * }
	 */

	@Before
	public void setup() {
		initdriver();
		loginPage= PageFactory.initElements(driver, LoginPage.class);
		
	}
	
	
	@Given ("User is on the Techfios Login Page")
	public void user_is_on_the_Techfios_Login_Page() {
		
		driver.get("https://techfios.com/billing/?ng=admin/");
	}
	
	@When ("User enters username as {string}")
	public void user_enters_username(String username) {
		loginPage.enterUserName(username);
	}
	@When("User enters password as {string}")
	public void user_enters_password_as(String password) {
		loginPage.enterPassword(password);
	}

	@When("User clicks on sign in button")
	public void user_clicks_on_sign_in_button() {
		
		loginPage.clickSignInButton();
	}

	@Then("User should land on dashboard page")
	public void user_should_land_on_dashboard_page() {
	    String expectedTitle="Dashboard- iBilling";
	    String actualTitle= loginPage.getPageTitle();
	   
	  
	  Assert.assertEquals(expectedTitle, actualTitle);
	}
	
}
