import { screen, render } from '@testing-library/react'
import Main from '.'


describe('Main', () => {
  test('should render the heading', () => {
    render(<Main title={'Main'} description={'Decription'} />)

    expect(screen.getByRole('heading', { name: /main/i })).toBeInTheDocument();
  })
})
