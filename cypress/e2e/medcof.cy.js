import homePage from "../support/pages/home-page"
import cbcPage from "../support/pages/cbc-page"
import handsOnPage from "../support/pages/hands-on-page"
import data from "../fixtures/texts_validation.json"

describe('Página Medcof', () => {

  const info = data

  beforeEach('Acesso a Home', () => {
    homePage.acessoHome(info.titlePage.home)
  });

  context('Cursos', () => {
    it('CBC', () => {

      homePage
        .menuCursos(info.cursos.cbc.menu)

    })
  });
})