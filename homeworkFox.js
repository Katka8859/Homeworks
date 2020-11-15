/*
ZADANI:
 Kliknout na tlačítko právě když je na něm vyobrazena lištička 🦊 Easy peasy!

  1. Jdi na stranku https://automation.cervik.repl.co/findfox.html
  2. DULEZITE: Pockej, az uvidis 🦊 v buttonu. Podivej se na https://webdriver.io/docs/api/element/waitForDisplayed.html
      ⚠️ Doporucuju zvysit timeout a nastavit interval na 30 (jak casto se bude WDIO ptat, jestli je dany element pritomny)
  3. Klikni na tlacitko s 🦊
  4. Udelej screenshot a pojmenuj ho listicka.png
  5. Nastav si dostatecny browser.pause(). Opravdu :) Treba 20 sekund.
  6. Relaxuj :)) 

  HINT: Emoji muzes pouzit v selektoru ;)
  Odevzdej screenshot a kod do moje.czechitas. :) 
*/
const saveScreenshot = (name) => {
  const getCorrectFormat = () => {
      let date = new Date();
      let year = date.getFullYear(); //vrati 2020
      let month = date.getMonth() + 1; // leden je 0, unor 1, atd., tak proto pridavame +1
      let day = date.getDay();
  
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let format = year + '-'+ month +'-' + day + '-' + hours + '-' + minutes + '-' + seconds + '-'
      return format 
  }
  browser.saveScreenshot('./' + getCorrectFormat() + name + '.png')
}


describe('Find 🦊',()=>{
  it('if you can!',()=>{
    browser.url('https://automation.cervik.repl.co/findfox.html')
    let liska = browser.$('button*=🦊')
    liska.waitForDisplayed({ timeout: 10000, interval: 30 })
    liska.click()

    saveScreenshot('listicka')
    
    expect(liska).toBeDisplayed()
    browser.pause(20000)

  })
})
