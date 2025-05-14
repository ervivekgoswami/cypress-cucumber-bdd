
class HomePage {
    elements = {
        navMenu: () => cy.get('nav[class="nav"] ul[id="menu-main-menu"] a'),
        getInTouchButton: () => cy.get("a.btn").first(),
        subMenuOptions: (mainMenu) => cy.xpath("(//a[text()='" + mainMenu + "']//following-sibling::ul)[1]//li//a"),
        errorMessage: () => cy.get('h3[data-test="error"]'),
    };

    selectMenuOption(mainMenu) {
        this.elements.navMenu().contains(mainMenu).realHover()
    }

    selectSubMenuOption(mainMenu, subMenu) {
        this.elements.navMenu().contains(mainMenu).realHover()
        // this.elements.subMenuOptions(mainMenu).contains(subMenu).realClick()
        this.elements.subMenuOptions(mainMenu).contains(subMenu).click()
        
    }

    verifySubMenuOptionsFor(mainMenu) {
        this.elements.navMenu().contains(mainMenu).realHover()
        this.elements.navMenu().contains(mainMenu).trigger('mousedown');
        this.elements.navMenu().contains(mainMenu).click();
        //Collect the items then print
        const items = []
        this.elements.subMenuOptions(mainMenu)
            .each(($li) => items.push($li.text()))
        return cy.wrap(items)
    }
    
}

export const homePage = new HomePage();
