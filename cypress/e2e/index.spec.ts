describe('ホームページ', () => {
  beforeEach(() => {
    // const startSosenkyoDateTime = new Date(
    //   new Date('2022-06-24 21:00:00').toLocaleString('ja-JP')
    // ).getTime()
    // cy.clock(startSosenkyoDateTime)

    cy.visit('/')
  })

  it('期待どおりの挙動をすること', () => {
    cy.url().should('equal', 'http://localhost:3100/')

    cy.get('title').should('have.text', 'ホーム - 幻水総選挙2022')

    // h1 タグ
    cy.get('h1').should('have.length', 9)
    cy.get('h1').each((item, index, list) => {
      if (index === 0) {
        cy.wrap(item).should('have.text', '幻水総選挙って何？')
      }

      if (index === 6) {
        cy.wrap(item).should('have.text', '「殿堂入り」について')
      }
    })
    cy.contains('h1', /お願い/).should('have.length', 1)

    // h2 タグ
    cy.get('h2').then((div) => {
      cy.wrap(div.eq(0)).should('have.attr', 'class', 'text-xl font-bold pb-4')
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
    cy.get('h1').each((item, index, list) => {
      if (index === 0) {
        cy.wrap(item).should('have.text', '幻水総選挙って何？')
      }

      if (index === 6) {
        cy.wrap(item).should('have.text', '「殿堂入り」について')
      }
    })
    cy.contains('h1', /お願い/).should('have.length', 1)

    // h2 タグ
    cy.get('h2').then((div) => {
      cy.wrap(div.eq(0)).should('have.attr', 'class', 'text-xl font-bold pb-4')
    })
  })
})
