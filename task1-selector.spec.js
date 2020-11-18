const addingPage = require('../pages/task1-selector.page')

describe('Page selectors', () => {
    before(() => {
        browser.url('https://automation.cervik.repl.co/selectors.html');
    })
    it('10x clicking on button "Dej like!" increases value in blue rectangle to 10', () => {

       // let giveLikeButton = browser.$('#like-button')      // najdi tlacitko "Dej like!" na konci pohadky
        //let likeCounter = browser.$('#lvlAwesome')          // najdi pocitadlo pod pohadkou
       


        //scrollIntoView zname - scrollni dolu, at vidis, co se deje
        addingPage.likeCounter.scrollIntoView()
        for (let i = 0; i < 10; i = i + 1) {
            // element, ktery jsme nasli na radku 12 a ted na nej klikame
            addingPage.giveLikeButton.click()
            browser.pause(500)
        }

        expect(addingPage.likeCounter).toHaveText('10') // overi, ze pocitadlo ukazuje spravnou hodnotu - 10
    })

    describe('fairytale', () => {

        it('has correct header', () => {
            //let headerOfStory = browser.$('#pohadka h2')            // najdi nadpis pohadky O Budulinkovi
            expect(addingPage.headerOfStory).toHaveText('O Budulínkovi')       // overi se, ze element v promenne headerOfStory ma dany text
        });

        it('has correct number of paragraphs', () => {
            //let paragraphsOfStory = browser.$$('#pohadka p')        // najdi vsechny paragraphs pohadky O Budulinkovi
            expect(addingPage.paragraphsOfStory).toBeElementsArrayOfSize(16)   // overi, ze pocet elementu v poli se rovna 16
        })
        it('has at least one paragraph with word "lištičky"', () => {
            //let foxsInStory = browser.$('p*=lištičky')              // najdi paragraph, kde se vyskytuje slovo "lištičky"
            expect(addingPage.foxsInStory).toHaveTextContaining('lištičky')    // overi, ze v danem elementu jsou opravdu lištičky
        })
        it('has correct image - of Budulinek on fox', () => {
            //let imageOfStory = browser.$('#pohadka img')        // najdi ilustraci v pohadce o budulinkovi
            expect(addingPage.imageOfStory).toHaveAttribute('src', 'https://automation.cervik.repl.co/images/budulinek.jpg')
        })
    })
})
