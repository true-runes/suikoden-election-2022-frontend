describe('ホーム - 総選挙内企画 - OPイラスト・CLイラスト', () => {
  const targetPath = '/events-in-event/op-cl-illustrations'

  beforeEach(() => {
    cy.visit(targetPath)
  })

  it('ページタイトルが期待どおりであること', () => {
    cy.url().should('equal', `http://localhost:3100${targetPath}`)

    cy.get('title').should(
      'have.text',
      'OPイラスト・CLイラスト - 幻水総選挙2022'
    )
  })

  it('パンくずリスト が期待どおりであること', () => {
    cy.get('.breadcrumbs').should(
      'have.text',
      'ホーム総選挙内企画OPイラスト・CLイラスト'
    )
  })

  it('h1 タグ が期待どおりであること', () => {
    cy.get('h1').should('have.length', 1)
    cy.get('h1').then(($h1) => {
      cy.wrap($h1).eq(0).should('have.text', 'OPイラスト・CLイラスト')
    })
  })

  it('h2 タグ が期待どおりであること', () => {
    cy.get('h2').should('have.length', 6)

    cy.get('h2').then(($h2) => {
      const texts = $h2.map((_index, item) => {
        // 各要素に対して jQuery の text() を実行している
        return Cypress.$(item).text()
      })

      // jQuery のラップを外して単純な Array にする
      const gotTexts = texts.get()

      const expectedTexts = [
        'OP＆CLイラストとは？',
        '募集内容の詳細',
        'お礼',
        'イラスト送付〆切',
        '昨年のOPイラスト',
        '昨年のCLイラスト',
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
