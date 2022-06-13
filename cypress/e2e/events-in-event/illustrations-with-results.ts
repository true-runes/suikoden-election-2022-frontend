describe('ホーム - 総選挙内企画 - 開票イラスト', () => {
  const targetPath = '/events-in-event/illustrations-with-results'

  beforeEach(() => {
    cy.visit(targetPath)
  })

  it('ページタイトルが期待どおりであること', () => {
    cy.url().should('equal', `http://localhost:3100${targetPath}`)

    cy.get('title').should('have.text', '開票イラスト - 幻水総選挙2022')
  })

  it('パンくずリスト が期待どおりであること', () => {
    cy.get('.breadcrumbs').should('have.text', 'ホーム総選挙内企画開票イラスト')
  })

  it('h1 タグ が期待どおりであること', () => {
    cy.get('h1').should('have.length', 1)
    cy.get('h1').then(($h1) => {
      cy.wrap($h1).eq(0).should('have.text', '開票イラスト')
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
        '開票イラストとは？',
        '〆切',
        '昨年の開票イラストの例',
        '募集概要',
        '募集詳細 - イラスト内容',
        '募集詳細 - サイズ',
        '募集詳細 - ファイル名',
        '募集詳細 - 送信方法',
        '募集詳細 - 送信方法詳細',
        'Q & A',
        'その他',
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

describe('（英語版）ホーム - 総選挙内企画 - 開票イラスト', () => {
  beforeEach(() => {
    cy.visit('/en/events-in-event/illustrations-with-results')
  })

  it.skip('ページタイトルが期待どおりであること', () => {
    cy.get('title').should('have.text', 'Home - Gensosenkyo 2022')
  })

  it.skip('ページ内容が期待どおりであること', () => {
    cy.get('body').contains('What is the "Gensosenkyo" ?')
  })
})
