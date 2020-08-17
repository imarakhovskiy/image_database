import React from 'react'
import { useSelector } from 'react-redux'
import { imagesSelector } from 'modules/Selectors'
import { SidebarItem } from './SidebarItem'
import { SidebarStateButton } from './SidebarStateButton'
import {
  SidebarWrapper,
  SidebarTopContent,
  SidebarItemsList,
  AnimationWrapper,
  TotalSize,
} from './styled'
import { fileSizeFormatter } from 'helpers/fileSizeFormatter'
import { SECTIONS, SECTIONS_LIST } from 'commonConstants'

export const Sidebar = ({ activeSection, setActiveSection, isOpened, setOpened }) => {
  const images = useSelector(imagesSelector)
  const totalSize = images.reduce((accum, el) => accum + el.size, 0)

  return (
    <AnimationWrapper>
      <SidebarWrapper isSidebarOpened={isOpened}>
        <SidebarTopContent>
          <SidebarStateButton
            isSidebarOpened={isOpened}
            onClick={() => setOpened(!isOpened)}
          />
          <SidebarItemsList role='navigation' isSidebarOpened={isOpened}>
            {SECTIONS_LIST.map((section, i) => {
              const { title, value, icon } = SECTIONS[section]

              return (
                <SidebarItem
                  key={i}
                  title={title}
                  icon={icon}
                  isActive={value === activeSection}
                  isSidebarOpened={isOpened}
                  onClick={() => setActiveSection(value)}
                />
              )
            })}
          </SidebarItemsList>
        </SidebarTopContent>
        {isOpened && <TotalSize>Total size: {fileSizeFormatter(totalSize)}</TotalSize>}
      </SidebarWrapper>
    </AnimationWrapper>
  )
}
