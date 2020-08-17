import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Sidebar, SectionContent } from 'components'
import { fetchImages } from 'modules/Actions'
import { SECTIONS_NAMES, SECTIONS } from 'commonConstants'
import { Photos, Events, Files, Sharing, GetStarted, Links } from 'pages'
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
  const [isSidebarOpened, setIsSidebarOpened] = useState(true)
  const [activeSection, setActiveSection] = useState(SECTIONS_NAMES.PHOTOS)

  useEffect(() => {
    fetchImages(dispatch)
  }, [dispatch])

  const SectionContentComponent = SECTIONS_COMPONENTS[activeSection]

  return (
    <LayoutWrapper>
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpened={isSidebarOpened}
        setOpened={setIsSidebarOpened}
      />
      <SectionContent
        title={SECTIONS[activeSection].title}
        isSidebarOpened={isSidebarOpened}
      >
        <SectionContentComponent isSidebarOpened={isSidebarOpened} />
      </SectionContent>
    </LayoutWrapper>
  )
}

export default App
