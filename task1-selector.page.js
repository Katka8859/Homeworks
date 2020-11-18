let addingPage = {
         
  get buttonAddCat() { return $('#addItem') },
  get giveLikeButton() {return browser.$('#like-button')},
  get likeCounter() {return browser.$('#lvlAwesome')},
  get headerOfStory() {return browser.$('#pohadka h2')},
  get paragraphsOfStory() {return browser.$$('#pohadka p')},
  get foxsInStory(){return browser.$('p*=lištičky')},
  get imageOfStory(){return browser.$('#pohadka img')},
}

      


module.exports = addingPage
