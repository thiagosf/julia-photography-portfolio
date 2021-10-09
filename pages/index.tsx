import Head from 'next/head'
import { useState } from 'react'
import { FilterEntity } from '../components/molecules/Filter/Filter'
import { Gallery } from '../components/organisms/Gallery/Gallery'
import { MainTemplate } from '../components/templates/MainTemplate/MainTemplate'
import { getPhotos, getTags, getAbout } from '../utils/api'

export default function HomePage({ photos, tags, about, filters }) {
  const [filter, setFilter] = useState<string>('')
  const onFilter = (value: string) => {
    setFilter(value)
  }
  const filteredPhotos = photos.filter((photo: any) => {
    if (filter) {
      return photo.tags.includes(filter)
    }
    return true
  })
  return (
    <div>
      <Head>
        <title>julia.photos</title>
      </Head>
      <MainTemplate
        currentFilter={filter}
        filters={filters}
        onFilter={onFilter}
      >
        <Gallery
          photos={filteredPhotos}
        />
      </MainTemplate>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const photos = (await getPhotos()) || []
  const tags = (await getTags()) || []
  const about = await getAbout()
  const filters: FilterEntity[] = [
    { label: 'All', value: '' },
  ].concat(
    photos
      .map((photo: any) => {
        return photo.tags
      })
      .flat()
      .filter((tag: string, index: number, arr: any[]) => {
        return arr.indexOf(tag) === index
      })
      .sort((a: string, b: string) => {
        if (a < b) return -1
        if (a > b) return 1
        return 0
      })
      .map((tag: string) => ({
        label: tag,
        value: tag
      }))
  )
  return {
    props: {
      photos,
      tags,
      about,
      filters,
    },
  }
}
