const expect = require('chai').expect;
const platform = process.env.PLATFORM;
async function navigateToLoginScreen()

{

let text = await $('aria/Open Mobile Menu')
await text.waitForDisplayed({timeout:50000});
await text.click();
let login_button= await $('//a[@data-testid="login-profile"]');
await login_button.waitForDisplayed({timeout:40000});
await login_button.click();
let login_form = await $('#email-login');
await login_form.waitForDisplayed({timeout:50000});


}

async function navigateToProfileScreen()

{

let menu_button = await $('aria/Open Mobile Menu')
await menu_button.waitForDisplayed({timeout:50000});
await menu_button.click();

let profile_button= await $('//a[@data-menuitem="profile"]');
await profile_button.waitForDisplayed({timeout:40000});
await profile_button.click();

let profile_form = await $('#profile-form');
 profile_form= await profile_form.isDisplayed();
//await expect(profile_form).toBeDisplayed();


}
async function editProfileButton()
{
  let edit_button= await $('//button[@data-location="profile"]');
  await edit_button.waitForDisplayed({timeout:50000});
  await edit_button.click();
}
async function editMobileNumber(number)
{
  let mobile_number= await $('//input[@name="mobile"]');
  await mobile_number.clearValue();
  await mobile_number.addValue(number);
}
async function editFirstName(fname)
{
  let first_name= await $('#first_name');
  await first_name.clearValue();
  await first_name.addValue(fname);
}
async function editLastName(lname)
{
  let last_name= await $('#last_name');
  await last_name.clearValue();
  await last_name.addValue(lname);
}
async function editNationality(nation)

{
  let nationality= await $('#nationality');
  await nationality.click();
  await nationality.clearValue();
  await nationality.setValue(nation);
  await nationality.addValue('\n');
}
async function editCountry(Country)

{
  let country= await $('#country');
  await country.click();
  await country.clearValue();
  await country.setValue(Country);
  await country.addValue('\n');
}
async function saveButton()

{
  let save_button = await $('#save-profile-info');
  await save_button.click();
  let edit_button= await $('//button[@data-location="profile"]');
  await edit_button.waitForDisplayed({timeout:50000});
  await driver.pause(10000);
}
async function loginFlow(user_mail,password)
{
    
     let email = await Email();
     await email.addValue(user_mail);
     let pass = await Password();
     await pass.addValue(password);
     let login_form_button= await $('#email-login-button');
     await login_form_button.click();
     let login_form = await $('#email-login');
     await login_form.waitForDisplayed({timeout:50000,reverse:true});

}
async function Email() 
{
  let email;
     email=  await $('//input[@name="email"]');
     await email.waitForDisplayed({timeout:20000});
     return email;
}
async function Password()
{
  let pass;
    pass= await $('//input[@name="password"]')
    await pass.waitForDisplayed({timeout:20000});    
    return pass;
}
async function navigateToSite()
{
      //await context("CHROMIUM");
      await browser.url('/en');
     let logo=  await $('aria/webook.com Logo');
     await logo.waitForDisplayed({timeout:60000});

    
}
async function changeLanguage()
{ 
   let language_icon;
   language_icon= await $("//button[@data-testid='lang-switcher']");
   // profile_icon= await profile_icon[0];
    await language_icon.waitForDisplayed({timeout:60000});
    await language_icon.click();
    await driver.pause(10000);

  }

module.exports  = 
{
   navigateToSite, loginFlow , navigateToLoginScreen, navigateToProfileScreen,
   editProfileButton, Email, Password, changeLanguage, editMobileNumber, editFirstName,
   editLastName, editNationality, editCountry, saveButton,
};
