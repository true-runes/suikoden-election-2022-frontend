describe('ホーム - 総選挙内企画 - 幻水総選挙本', () => {
  beforeEach(() => {
    cy.visit('/events-in-event/sosenkyo-book')
  })

  it('ページタイトルが期待どおりであること', () => {
    // TODO: ホスト名をハードコーディングしたくない
    cy.url().should(
      'equal',
      'http://localhost:3100/events-in-event/sosenkyo-book'
    )

    cy.get('title').should('have.text', '幻水総選挙本 - 幻水総選挙2022')
  })

  it('h1 タグ が期待どおりであること', () => {
    cy.url().should(
      'equal',
      'http://localhost:3100/events-in-event/sosenkyo-book'
    )

    // h1 タグ
    cy.get('h1').should('have.length', 1)
    cy.get('h1').then(($h1) => {
      cy.wrap($h1).eq(0).should('have.text', '幻水総選挙本')
    })
  })

  it('h2 タグ が期待どおりであること', () => {
    cy.url().should(
      'equal',
      'http://localhost:3100/events-in-event/sosenkyo-book'
    )

    // h2 タグ
    cy.get('h2').should('have.length', 16)

    cy.get('h2').then(($h2) => {
      const texts = $h2.map((_index, item) => {
        // 各要素に対して jQuery の text() を実行している
        return Cypress.$(item).text()
      })

      // jQuery のラップを外して単純な Array にする
      const gotTexts = texts.get()

      const expectedTexts = [
        '幻水総選挙本とは？',
        '開票イラストの掲載について',
        '本について',
        '募集概要',
        '募集詳細 - 印刷用データのサイズ',
        '募集詳細 - 印刷用データの解像度',
        '募集詳細 - カラーモード',
        '募集詳細 - 保存形式',
        '募集詳細 - ファイル名',
        '〆切',
        '送信方法詳細',
        '参加の流れ',
        '注意',
        '過去の作品掲載について',
        'Q & A',
        '連絡先',
      ]

      // Cypress のオブジェクトではないので expect を用いて比較している
      // そして配列なので deep.equal する
      expect(gotTexts).to.deep.equal(expectedTexts)
    })
  })

  it('フッタ が期待どおりであること', () => {
    cy.url().should(
      'equal',
      'http://localhost:3100/events-in-event/sosenkyo-book'
    )

    cy.get('footer').should('have.length', 1)
  })
})
