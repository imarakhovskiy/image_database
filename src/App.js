import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Sidebar } from './components/Sidebar'
import { fetchImages } from './modules/Actions'
import { SECTIONS_NAMES } from './constants'
import { Photos, Events, Files, Sharing, GetStarted, Links } from './components/pages'
import { LayoutWrapper } from './styled'

const SECTIONS_COMPONENTS = {
  [SECTIONS_NAMES.FILES]: Files,
  [SECTIONS_NAMES.PHOTOS]: Photos,
  [SECTIONS_NAMES.SHARING]: Sharing,
  [SECTIONS_NAMES.LINKS]: Links,
  [SECTIONS_NAMES.EVENTS]: Events,
  [SECTIONS_NAMES.GET_STARTED]: GetStarted,
}

function App() {
  const dispatch = useDispatch()
  const [activeSection, setActiveSection] = useState(SECTIONS_NAMES.PHOTOS)

  useEffect(() => {
    fetchImages(dispatch)
  }, [dispatch])

  const SectionContentComponent = SECTIONS_COMPONENTS[activeSection]

  return (
    <LayoutWrapper>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <SectionContentComponent />
    </LayoutWrapper>
  )
}

export default App
