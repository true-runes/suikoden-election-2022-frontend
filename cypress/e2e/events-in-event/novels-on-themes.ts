describe('ホーム - 総選挙内企画 - お題小説', () => {
  const targetPath = '/events-in-event/novels-on-themes'

  beforeEach(() => {
    cy.visit(targetPath)
  })

  it('ページタイトルが期待どおりであること', () => {
    cy.url().should('equal', `http://localhost:3100${targetPath}`)

    cy.get('title').should('have.text', 'お題小説 - 幻水総選挙2022')
  })

  it('パンくずリスト が期待どおりであること', () => {
    cy.get('.breadcrumbs').should('have.text', 'ホーム総選挙内企画お題小説')
  })

  it('h1 タグ が期待どおりであること', () => {
    cy.get('h1').should('have.length', 1)
    cy.get('h1').then(($h1) => {
      cy.wrap($h1).eq(0).should('have.text', 'お題小説')
    })
  })

  it('h2 タグ が期待どおりであること', () => {
    cy.get('h2').should('have.length', 11)

    cy.get('h2').then(($h2) => {
      const texts = $h2.map((_index, item) => {
        // 各要素に対して jQuery の text() を実行している
        return Cypress.$(item).text()
      })

      // jQuery のラップを外して単純な Array にする
      const gotTexts = texts.get()

      const expectedTexts = [
        'お題小説とは？',
        'お題',
        '文字数',
        '応募数',
        '締切',
        'ツイート例',
        '応募の受理',
        '小説の作成方法',
        '注意点',
        '作品のご紹介について',
        '非公開アカウントの方へ',
      ]

      // Cypress のオブジェクトではないので expect を用いて比較している
      // そして配列なので deep.equal する
      expect(gotTexts).to.deep.equal(expectedTexts)
    })
  })

  it('フッタ が期待どおりであること', () => {
    cy.get('footer').should('have.length', 1)
  })
})

describe('（英語版）ホーム - 総選挙内企画 - お題小説', () => {
  beforeEach(() => {
    cy.visit('/en/events-in-event/novels-on-themes')
  })

  it.skip('ページタイトルが期待どおりであること', () => {
    cy.get('title').should('have.text', 'Home - Gensosenkyo 2022')
  })

  it.skip('ページ内容が期待どおりであること', () => {
    cy.get('body').contains('What is the "Gensosenkyo" ?')
  })
})
