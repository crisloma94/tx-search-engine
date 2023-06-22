import { renderHook } from '@testing-library/react';
import { render } from '@testing-library/react';
import { useOnClickOutside } from '../use-on-click-outside';

describe('useOnClickOutside hook test suite', () => {
  it('Should call the handler when clicking outside the element', () => {
    const handler = jest.fn();
    const ref: { current: HTMLInputElement | null } = { current: null };

    render(<div ref={ref}>Outside</div>);

    renderHook(() => useOnClickOutside(ref, handler));

    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('Should not call the handler when clicking inside the element', () => {
    const handler = jest.fn();
    const ref: { current: HTMLInputElement | null } = { current: null };

    render(<div ref={ref}>Outside</div>);

    renderHook(() => useOnClickOutside(ref, handler));

    ref.current?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(0);
  });
});
