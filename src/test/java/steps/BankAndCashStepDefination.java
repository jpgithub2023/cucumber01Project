package steps;




import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.BankAndCashPage;
import pages.LoginPage;
import pages.TestBase;

public class BankAndCashStepDefination extends TestBase {
	
	LoginPage loginPage;
	BankAndCashPage bankAndCashPage;
	

//	@Before
//	public void setupBankAndCash() {
//		bankAndCashPage=PageFactory.initElements(driver, BankAndCashPage.class);
//		
//	}

	
	@Then("User clicks on bankCash")
	public void user_clicks_on_bankCash()  {
	bankAndCashPage=PageFactory.initElements(driver, BankAndCashPage.class);
	
	
	try {
		Thread.sleep(2000);
		bankAndCashPage.clickOnBankAndCashOption();
	} catch (InterruptedException e) {
		
		e.printStackTrace();
	}
		
	}
	
	@When ("User clicks on newAccount")
	public void user_clicks_on_newAccount() {
		bankAndCashPage.clickNewAccountOption();
	}
	
	
	@And ("User should land on Add New Account page")
		public void User_should_land_on_Add_New_Account_page() {
			String expectedTitle="Accounts- iBilling";
			String actualTitle=bankAndCashPage.getPageTitle();
			Assert.assertEquals(expectedTitle, actualTitle);
		}
	
	
	
	
	@And("User enters accountTitle in the accounts page as {string}")
	public void user_enters_accountTitle_in_the_accounts_page_as(String accountTitle) {
	  bankAndCashPage.entersAccountTitle(accountTitle);
	}
	
	@And("User enters description in the accounts page as {string}")
	public void user_enters_description_in_the_accounts_page_as(String account_description) {
	   bankAndCashPage.entersDescription(account_description);
	}
	
	@And("User enters initialBalance in the accounts page as {string}")
	public void user_enters_initialBalance_in_the_accounts_page_as(String balance) {
	    bankAndCashPage.entersInitialBalance(balance);
	}

	@And("User enters accountNumber in the accounts page as {string}")
	public void user_enters_accountNumber_in_the_accounts_page_as(String Account_Number) {
	    bankAndCashPage.entersAccountNumber(Account_Number);
	}
	
	@And("User enters contactPerson in the accounts page as {string}")
	public void user_enters_contactPerson_in_the_accounts_page_as(String contact) {
	    bankAndCashPage.entersContactPerson(contact);
	}

	@And("User enters Phone in the accounts page as {string}")
	public void user_enters_Phone_in_the_accounts_page_as(String number) {
	  bankAndCashPage.enterPhoneNumber(number);
	}

	@And("User enters internetBankingURL in the accounts page as {string}")
	public void user_enters_internetBankingURL_in_the_accounts_page_as(String url) {
	  bankAndCashPage.entersUrllink(url);
	}

	@And("User clicks on submit")
	public void user_clicks_on_submit() {
		
	    bankAndCashPage.clicksOnSubmitButton();
	    try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
		
			e.printStackTrace();
		}
	}
	
	@Then("User should be able to validate account created successfully")
	public void user_should_be_able_to_validate_account_created_successfully() {
		
		String expectedMessage="Account Created Successfully";
		String ActualMessage=bankAndCashPage.validateaccount();
		Assert.assertEquals(expectedMessage,ActualMessage);
	
	
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}
