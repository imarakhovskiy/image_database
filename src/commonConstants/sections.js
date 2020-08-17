import { ReactComponent as FilesIcon } from 'assets/icons/files.svg'
import { ReactComponent as PhotosIcon } from 'assets/icons/photos.svg'
import { ReactComponent as SharingsIcon } from 'assets/icons/share.svg'
import { ReactComponent as LinksIcon } from 'assets/icons/link.svg'
import { ReactComponent as EventsIcon } from 'assets/icons/calendar.svg'
import { ReactComponent as GetStartedIcon } from 'assets/icons/discover.svg'

export const SECTIONS_NAMES = {
  FILES: 'files',
  PHOTOS: 'photos',
  SHARING: 'sharing',
  LINKS: 'links',
  EVENTS: 'events',
  GET_STARTED: 'getStarted',
}

export const SECTIONS_LIST = [
  SECTIONS_NAMES.FILES,
  SECTIONS_NAMES.PHOTOS,
  SECTIONS_NAMES.SHARING,
  SECTIONS_NAMES.LINKS,
  SECTIONS_NAMES.EVENTS,
  SECTIONS_NAMES.GET_STARTED,
]

export const SECTIONS = {
  [SECTIONS_NAMES.FILES]: {
    title: 'Files',
    value: SECTIONS_NAMES.FILES,
    icon: FilesIcon,
  },
  [SECTIONS_NAMES.PHOTOS]: {
    title: 'Photos',
    value: SECTIONS_NAMES.PHOTOS,
    icon: PhotosIcon,
  },
  [SECTIONS_NAMES.SHARING]: {
    title: 'Sharing',
    value: SECTIONS_NAMES.SHARING,
    icon: SharingsIcon,
  },
  [SECTIONS_NAMES.LINKS]: {
    title: 'Links',
    value: SECTIONS_NAMES.LINKS,
    icon: LinksIcon,
  },
  [SECTIONS_NAMES.EVENTS]: {
    title: 'Events',
    value: SECTIONS_NAMES.EVENTS,
    icon: EventsIcon,
  },
  [SECTIONS_NAMES.GET_STARTED]: {
    title: 'Get Started',
    value: SECTIONS_NAMES.GET_STARTED,
    icon: GetStartedIcon,
  },
}
