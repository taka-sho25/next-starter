import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { Button } from './'

let component: React.ReactNode

const onClickMock = vi.fn()

beforeEach(() => {
  component = Button({
    type: 'button',
    children: React.createElement('div', {}, 'hello'),
    onClick: onClickMock,
  })
})

afterEach(() => {
  cleanup()
})

describe('Button Component', () => {
  test('default snapshot', () => {
    const { container } = render(component)
    expect(container).toMatchSnapshot()
  })
  test('call onClick Event', async () => {
    render(component)
    expect(onClickMock).toHaveBeenCalledTimes(0)

    await userEvent.click(screen.getByRole('button'))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
