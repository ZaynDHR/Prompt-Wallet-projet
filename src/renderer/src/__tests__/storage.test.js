import { describe, it, expect, beforeEach, vi } from 'vitest'
import storage from '../storage'

describe('Storage Module', () => {
  let store = {}

  beforeEach(() => {
    store = {}
    global.localStorage = {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => {
        store[key] = value.toString()
      },
      removeItem: (key) => {
        delete store[key]
      },
      clear: () => {
        store = {}
      }
    }
  })

  it('should save and retrieve prompts', () => {
    const prompts = [
      { id: 1, title: 'Test Prompt', text: 'Test content', category: 'Marketing', dynamicFields: [] }
    ]

    storage.save(prompts)
    const retrieved = storage.data

    expect(retrieved).toEqual(prompts)
  })

  it('should return null when no data is stored', () => {
    expect(storage.data).toBeNull()
  })

  it('should handle empty array', () => {
    storage.save([])
    expect(storage.data).toEqual([])
  })

  it('should preserve prompt structure', () => {
    const prompt = {
      id: 123,
      title: 'API Documentation',
      text: 'Generate comprehensive API documentation for {endpoint}',
      category: 'Développement',
      dynamicFields: ['endpoint']
    }

    storage.save([prompt])
    const retrieved = storage.data

    expect(retrieved[0]).toEqual(prompt)
    expect(retrieved[0].dynamicFields).toContain('endpoint')
  })
})
