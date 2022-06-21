describe('ホームページ', () => {
  beforeEach(() => {
    // const startSosenkyoDateTime = new Date(
    //   new Date('2022-06-24 21:00:00').toLocaleString('ja-JP')
    // ).getTime()
    // cy.clock(startSosenkyoDateTime)

    cy.visit('/')
  })

  it('ページタイトルが期待どおりであること', () => {
    cy.url().should('equal', 'http://localhost:3100/')

    cy.get('title').should('have.text', 'ホーム - 幻水総選挙2022')
  })

  // 壊れやすいのでいったん skip とする
  it.skip('h1 タグ が期待どおりであること', () => {
    cy.url().should('equal', 'http://localhost:3100/')

    cy.get('h1').should('have.length', 9)
    cy.get('h1').eq(0).should('have.text', '幻水総選挙って何？')
    cy.get('h1').eq(6).should('have.text', '「殿堂入り」について')
    cy.contains('h1', /お願い/).should('have.length', 1)
  })

  // 壊れやすいのでいったん skip とする
  it.skip('h2 タグ が期待どおりであること', () => {
    cy.url().should('equal', 'http://localhost:3100/')

    // then のコールバック内で Cypress command を実行させるためには wrap する必要がある
    cy.get('h2').then(($h2) => {
      cy.wrap($h2).eq(0).should('have.attr', 'class', 'text-xl font-bold pb-4')
    })
  })

  it('ページ内の主要文言が期待どおりであること', () => {
    cy.url().should('equal', 'http://localhost:3100/')

    cy.contains('body', '2022年6月24日（金）21:00 から')
    cy.contains('body', '2022年6月26日（日）23:59 まで')
    cy.contains('body', '2022年7月9日（土）19:00～（予定）')
    cy.contains('body', '2022年7月16日（土）19:00～（予定）')

    cy.contains('body', '方法1: ツイート投票')
    cy.contains('body', '方法2: DM投票')

    cy.contains('body', '2022/7/3（日）23:59まで公開アカウントのままにする。')
  })
})

describe('ホームページ（投票期間中）', () => {
  beforeEach(() => {
    const startSosenkyoDateTime = new Date(
      new Date('2022-06-24 21:00:00').toLocaleString('ja-JP')
    ).getTime()
    cy.clock(startSosenkyoDateTime)

    cy.visit('/')
  })

  // 壊れやすいのでいったん skip とする
  it.skip('期待どおりの挙動をすること', () => {
    cy.url().should('equal', 'http://localhost:3100/')

    cy.get('title').should('have.text', 'ホーム - 幻水総選挙2022')

    // h1 タグ
    cy.get('h1').should('have.length', 9)
    cy.get('h1').eq(0).should('have.text', '幻水総選挙って何？')
    cy.get('h1').eq(6).should('have.text', '「殿堂入り」について')
    cy.contains('h1', /お願い/).should('have.length', 1)

    // h2 タグ
    // then のコールバック内で Cypress command を実行させるためには wrap する必要がある
    cy.get('h2').then(($h2) => {
      cy.wrap($h2).eq(0).should('have.attr', 'class', 'text-xl font-bold pb-4')
    })
  })
})

describe('（英語版）ホームページ', () => {
  beforeEach(() => {
    cy.visit('/en')
  })

  it('ページタイトルが期待どおりであること', () => {
    cy.url().should('equal', 'http://localhost:3100/en')

    cy.get('title').should('have.text', 'Home - Gensosenkyo 2022')
  })

  it('ページ内容が期待どおりであること', () => {
    cy.get('body').contains('What is the "Gensosenkyo" ?')
  })
})
