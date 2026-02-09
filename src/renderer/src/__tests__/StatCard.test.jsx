import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import StatCard from '../components/StatCard'

describe('StatCard Component', () => {
  it('renders title', () => {
    render(
      <StatCard
        darkMode={true}
        title="Test Title"
        value={5}
      />
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders value', () => {
    render(
      <StatCard
        darkMode={true}
        title="Prompts"
        value={42}
      />
    )

    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('renders in dark mode', () => {
    const { container } = render(
      <StatCard
        darkMode={true}
        title="Test"
        value={10}
      />
    )

    const card = container.querySelector('.stat-card')
    expect(card).toHaveClass('dark')
  })

  it('renders in light mode', () => {
    const { container } = render(
      <StatCard
        darkMode={false}
        title="Test"
        value={10}
      />
    )

    const card = container.querySelector('.stat-card')
    expect(card).toHaveClass('light')
  })

  it('displays zero value', () => {
    render(
      <StatCard
        darkMode={true}
        title="Empty"
        value={0}
      />
    )

    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('displays large numbers', () => {
    render(
      <StatCard
        darkMode={true}
        title="Big"
        value={9999}
      />
    )

    expect(screen.getByText('9999')).toBeInTheDocument()
  })
})
