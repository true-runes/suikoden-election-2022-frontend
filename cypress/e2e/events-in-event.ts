describe('総選挙内企画のページ', () => {
  beforeEach(() => {
    cy.visit('/events-in-event')
  })

  it('期待どおりの挙動をすること', () => {
    cy.url().should('equal', 'http://localhost:3100/events-in-event')

    cy.get('title').should('have.text', '総選挙内企画 - 幻水総選挙2022')

    // h1 タグ
    cy.get('h1').should('have.length', 1)
    cy.get('h1').eq(0).should('have.text', '総選挙内企画')

    // 単一コンポーネント内の li タグ
    cy.get('.hero li').should('have.length', 7)

    cy.get('.hero li').then((hero_and_li_elements) => {
      const texts = hero_and_li_elements.map((_index, item) => {
        // 各要素に対して jQuery の text() を実行している
        return Cypress.$(item).text()
      })

      // jQuery のラップを外して単純な Array にする
      const gotTexts = texts.get()

      const expectedTexts = [
        '選挙運動',
        '開票イラスト幻水総選挙本',
        '幻水総選挙本',
        'お題小説',
        '推し台詞教えて！',
        'オープニングイラスト・クロージングイラスト',
        'ボーナス票',
      ]

      // Cypress のオブジェクトではないので expect を用いて比較している（配列なので deep する）
      expect(gotTexts).to.deep.equal(expectedTexts)
    })
  })
})
