/// <reference types="cypress" />

describe('E2E test - Sticker Form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should select stickers, set quantity, and add observations', () => {
    // Seleciona um adesivo clicando no checkbox
    cy.get('[data-testid="checkbox-react"]').click()

    // Incrementa a quantidade de adesivos desejada
    cy.get('[data-testid="quantity-increment"]').click()

    // Adiciona observações na caixa de texto
    const observationText = 'This is a test'
    cy.get('[data-testid="observations"]').type(observationText)

    // Submete o formulário
    cy.get('[data-testid="submit-button"]').click()

    // Verifica se a mensagem de sucesso está presente na página
    cy.get('[data-testid="message"]').should(
      'contain',
      'Formulário enviado com sucesso!',
    )
  })

  it('should display an error message when stickers are not selected', () => {
    // Não seleciona nenhum adesivo

    // Incrementa a quantidade de adesivos desejada
    cy.get('[data-testid="quantity-increment"]').click()

    // Adiciona observações na caixa de texto
    const observationText = 'This is a test'
    cy.get('[data-testid="observations"]').type(observationText)

    // Submete o formulário
    cy.get('[data-testid="submit-button"]').click()

    // Verifica se a mensagem de erro está presente na página
    cy.get('[data-testid="message"]').should(
      'contain',
      'Por favor, selecione pelo menos um adesivo e uma quantidade.',
    )
  })
})
