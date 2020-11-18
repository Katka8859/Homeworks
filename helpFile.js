//pomocný soubor pro Hackathon

//https://webdriver.io/docs/api.html

//sablona pro describe a it
describe('epic(prihlaseni)', ()=>{
  describe('validni',()=>{

  
  it('', ()=>{

    
  })

})

describe('nevalidni',()=>{
  it('', ()=>{
    

  })
  })
});




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
//specs + pages = propojení souborů
const loginPage = require('../pages/login.page')
const loggedPage = require('../pages/logged.page')

describe('Login page', () => {
  beforeEach(() => {
    browser.url('https://automation.cervik.repl.co/login.html')
  })

  it('jde se prihlasit pomoci PoP', () => {
    let username = 'czechitas'
    let pwd = 'D4Ostr4v42020'

    loginPage.inputUsername.setValue(username)
    loginPage.inputPassword.setValue(pwd)
    loginPage.buttonLogIn.click()

    expect(loggedPage.h1).toHaveText('LOGGED!')
  })

  it('jde se prihlasit pomoci PoP a funkce', () => {
    let username = 'czechitas'
    let pwd = 'D4Ostr4v42020'

    loginPage.login(username, pwd)

    expect(loggedPage.h1).toHaveText('LOGGED!')
  })
})
//pages pomocný soubor 
  let loginPage = {
    get inputUsername() { return $('#login-username') },
    get inputPassword() { return $('#login-password') },
    get buttonLogIn() { return $('#login-submit') },
  
    login(username, password) {
      this.inputUsername.setValue(username)
      this.inputPassword.setValue(password)
      this.buttonLogIn.click()
    }
  }
  
  module.exports = loginPage


//další ukázka propojení pomocných souborů, nyní s objektem 
const addingPage = require('../pages/03-adding.page')

describe('Adding page', () => { 
  before(()=>{
    browser.url(addingPage.url)
  })

  afterEach(()=>{
    addingPage.buttons.removeAll.click()
  })

  it('jde pridat kocku 20x', ()=>{
    for (let i = 0; i < 20; i++) {
      addingPage.buttons.addCat.click()
    }
    expect(addingPage.cats).toBeElementsArrayOfSize(20)
  })

  it('pro pridani 5 kocek a odebrani jedne zustava 4 viditelnych', ()=>{
    for (let i = 0; i < 5; i++) {
      addingPage.buttons.addCat.click()
    }
    addingPage.buttons.removeOne.click()
    expect(addingPage.cats).toBeElementsArrayOfSize(4)
  })
})
//+pomocný soubor pages 
let addingPage = {
    get url() { return 'https://automation.cervik.repl.co/adding.html'},
    buttons: {
      get addCat() { return $('#addItem') },
      get removeOne() { return $('#removeItem') },
      get removeAll() { return $('#removeAll') },
    },
    get cats() { return $$('.cat') },
  }
  
  module.exports = addingPage

 //scroll into view
 let likeCounter = browser.$('#lvlAwesome') 
 likeCounter.scrollIntoView()
        for(let i= 0; i < 10; i = i +1) {
            // element, ktery jsme nasli na radku 12 a ted na nej klikame
            giveLikeButton.click()
            browser.pause(500)
        }

//rychle page info a h1
        const showPageInfo = () => {
          console.log('========PAGE INFO=======')
          console.log('URL: ' + browser.getUrl())
          console.log('Title: ' + browser.getTitle())
          console.log('Header of page (H1) ' + browser.$('h1'))
            
      }
      module.exports = {showPageInfo}


//pomocny soubor let
let addingPage = {
  // najdi pocitadlo pod pohadkou
// get zajistuje, ze nemusime psat pak zavorky, coz nam rika, 
// ze to je jen element, ne funkce, ktera neco dela.
// PRIKLAD - funkce, ktera vraci element
get buttonAddCat() { return $('#addItem') },
get giveLikeButton() {return browser.$('#like-button')},
get likeCounter() {return browser.$('#lvlAwesome')},
get headerOfStory() {return browser.$('#pohadka h2')},
get paragraphsOfStory() {return browser.$$('#pohadka p')},
get foxsInStory(){return browser.$('p*=lištičky')},
get imageOfStory(){return browser.$('#pohadka img')},
}

module.exports = addingPage

/* Selektory!!!

ID 					$('#sector-by-id')
Name 				$('[name="email"]')
Class Name		$('.animal-text') // $('p.animal-text')
Tag Name			$('p')
(Link) Text			$('a=Liska Bystrouska')
Partial Link Text	$('button*=THE button')
Custom			$('[data-qa="custom1"]')
XPATH				$('//*[@id="sector-by-id"]')*/


//speky
browser.$$('div#selector-buttons button')
expect($('el')).toHaveTextContaining('O Budu') //obsahuje text
beforeEach(()=>{
  
})

it.skip == xit 	//-- ignorovat testcase
it.only 			//-- pusť v tomto souboru jen tento test
//Stejne pro describe 
describe.skip, xdescribe, describe.only

//input[placeholder='Username']
//button[type='button']
