import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import PromptCard from '../components/PromptCard'

describe('PromptCard Component', () => {
  const mockPrompt = {
    id: 1,
    title: 'Test Prompt',
    text: 'This is a test prompt',
    category: 'Marketing',
    dynamicFields: []
  }

  const mockHandlers = {
    onEdit: vi.fn(),
    onDelete: vi.fn()
  }

  it('renders prompt title', () => {
    render(
      <PromptCard
        prompt={mockPrompt}
        darkMode={true}
        onEdit={mockHandlers.onEdit}
        onDelete={mockHandlers.onDelete}
      />
    )

    expect(screen.getByText('Test Prompt')).toBeInTheDocument()
  })

  it('renders category badge', () => {
    render(
      <PromptCard
        prompt={mockPrompt}
        darkMode={true}
        onEdit={mockHandlers.onEdit}
        onDelete={mockHandlers.onDelete}
      />
    )

    expect(screen.getByText('Marketing')).toBeInTheDocument()
  })

  it('calls onEdit when edit button is clicked', () => {
    const onEditFn = vi.fn()
    const { container } = render(
      <PromptCard
        prompt={mockPrompt}
        darkMode={true}
        onEdit={onEditFn}
        onDelete={mockHandlers.onDelete}
      />
    )

    const buttons = container.querySelectorAll('button')
    // Edit button is the second button (copy, edit, delete)
    fireEvent.click(buttons[1])

    expect(onEditFn).toHaveBeenCalled()
  })

  it('calls onDelete when delete button is clicked', () => {
    const { container } = render(
      <PromptCard
        prompt={mockPrompt}
        darkMode={true}
        onEdit={mockHandlers.onEdit}
        onDelete={mockHandlers.onDelete}
      />
    )

    const buttons = container.querySelectorAll('button')
    const deleteButton = buttons[buttons.length - 1]
    fireEvent.click(deleteButton)

    expect(mockHandlers.onDelete).toHaveBeenCalled()
  })

  it('renders in dark mode', () => {
    const { container } = render(
      <PromptCard
        prompt={mockPrompt}
        darkMode={true}
        onEdit={mockHandlers.onEdit}
        onDelete={mockHandlers.onDelete}
      />
    )

    const card = container.querySelector('.prompt-card')
    expect(card).toHaveClass('dark')
  })

  it('renders in light mode', () => {
    const { container } = render(
      <PromptCard
        prompt={mockPrompt}
        darkMode={false}
        onEdit={mockHandlers.onEdit}
        onDelete={mockHandlers.onDelete}
      />
    )

    const card = container.querySelector('.prompt-card')
    expect(card).toHaveClass('light')
  })
})
