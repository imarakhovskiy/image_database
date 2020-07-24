import React from 'react'
import { useSelector } from 'react-redux'
import { imagesSelector } from '../../modules/Selectors'
import { SidebarItem } from './SidebarItem'
import { SidebarWrapper, TotalSize } from './styled'
import { fileSizeFormatter } from '../../helpers/fileSizeFormatter'
import { SECTIONS } from '../../constants'

export const Sidebar = ({ activeSection, setActiveSection }) => {
  const images = useSelector(imagesSelector)
  const totalSize = images.reduce((accum, el) => accum + el.size, 0)
  console.log(SECTIONS)
  return (
    <SidebarWrapper>
      <ul role="navigation">
        {SECTIONS.map(({ title, value }, i) => (
          <SidebarItem
            key={i}
            title={title}
            isActive={value === activeSection}
            onClick={() => setActiveSection(value)}
          />
        ))}
      </ul>
      <TotalSize>Total size: {fileSizeFormatter(totalSize)}</TotalSize>
    </SidebarWrapper>
  )
}
