describe('ホーム - 総選挙内企画 - 幻水総選挙本', () => {
  beforeEach(() => {
    cy.visit('/events-in-event/sosenkyo-book')
  })

  it('期待どおりの挙動をすること', () => {
    // TODO: ホスト名をハードコーディングしたくない
    cy.url().should(
      'equal',
      'http://localhost:3100/events-in-event/sosenkyo-book'
    )

    cy.get('title').should('have.text', '幻水総選挙本 - 幻水総選挙2022')

    // h1 タグ
    const h1 = cy.get('h1')
    h1.should('have.length', 1)
    h1.then(($h1) => {
      cy.wrap($h1).eq(0).should('have.text', '幻水総選挙本')
    })

    // h2 タグ
    const h2 = cy.get('h2')
    h2.should('have.length', 16)

    const expectedH2Texts = [
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

    // TODO: もっとうまい方法がきっとある
    h2.each((item, index, _list) => {
      cy.wrap(item).should('have.text', expectedH2Texts[index])
    })

    // フッタ
    const footer = cy.get('footer')
    footer.should('have.length', 1)
  })
})
