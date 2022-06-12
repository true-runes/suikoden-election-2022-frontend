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

  it('h1 タグ が期待どおりであること', () => {
    cy.url().should('equal', 'http://localhost:3100/')

    cy.get('h1').should('have.length', 9)
    cy.get('h1').eq(0).should('have.text', '幻水総選挙って何？')
    cy.get('h1').eq(6).should('have.text', '「殿堂入り」について')
    cy.contains('h1', /お願い/).should('have.length', 1)
  })

  it('h2 タグ が期待どおりであること', () => {
    cy.url().should('equal', 'http://localhost:3100/')

    // then のコールバック内で Cypress command を実行させるためには wrap する必要がある
    cy.get('h2').then(($h2) => {
      cy.wrap($h2).eq(0).should('have.attr', 'class', 'text-xl font-bold pb-4')
    })
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

  it('期待どおりの挙動をすること', () => {
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
