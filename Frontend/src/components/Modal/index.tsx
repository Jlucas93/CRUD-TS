import React from 'react'
import { Transition, TransitionStatus } from 'react-transition-group'
import * as S from './style'
// Types
export interface Props {
  isOpen: boolean
  close: () => void
  delay?: number
  children: React.ReactNode | ((status: TransitionStatus, delay: number) => React.ReactNode)
}
// Cached
let fade_counter = 0
// Component
const Fade: React.FC<Props> = ({ isOpen, close, children, delay = 250 }) => {
  // Refs
  const containerRef = React.useRef(null)
  // Effects
  React.useEffect(() => {
    if (isOpen) {
      fade_counter++
      document.body.style.overflow = 'hidden'
    } else if (fade_counter) {
      fade_counter--
      if (!fade_counter)
        document.body.style.overflow = 'auto'
    }
  }, [isOpen])
  // Render
  return (
    <Transition in= { isOpen } timeout = {{ enter: 0, exit: delay }
} unmountOnExit>
  { status => (
    <S.Container>
    {
      typeof children === 'function'
        ? children(status, delay)
        : status === 'entered' && children
    }
    < S.Fade
            onMouseDown = {() => close()}
    ref = { containerRef }
            status = { status }
            delay = { delay }
    />
    </S.Container>
  )}
</Transition>
  )
}
export default Fade