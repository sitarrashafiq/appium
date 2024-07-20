const {loginFlow, navigateToSite,navigateToLoginScreen,navigateToProfileScreen,editProfileButton, changeLanguage, editFirstName, editLastName, editNationality, editCountry, editMobileNumber, saveButton} = require("../pageobjects/genral");

describe('Test the Web App ', () => {
    before(async ()=>{
        
       await navigateToSite();
    }),
    
      
    it("Should Navigate to the Login screen and Login into the App ",async()=>
       {
       
        await navigateToLoginScreen();
        await loginFlow('sitarashafiq@gmail.com','C0mplexpass@');

      });

      it("Should Navigate and Edit the Profile Screen ",async()=>
      {
      
       await navigateToProfileScreen();
       await editProfileButton();
       await editMobileNumber('3041232123')
       await editFirstName('Test');
       await editLastName('last');
       await editNationality('Pakistan');
       await editCountry('Pakistan')
       await saveButton();

     });


     it('should change the language', async () => {
         await changeLanguage()
        
     })
});