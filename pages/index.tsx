import Head from 'next/head'
import { Default } from '../components/templates'
import Home from '../components/pages/Home/Home'
import { getPhotos, getTags, getAbout } from '../utils/api'

export default function HomePage({ photos, tags, about }) {
  return (
    <div>
      <Head>
        <title>julia.photos</title>
      </Head>
      <Default>
        <Home photos={photos} tags={tags} about={about} />
      </Default>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const photos = (await getPhotos()) || []
  const tags = (await getTags()) || []
  const about = await getAbout()
  return {
    props: {
      photos,
      tags,
      about,
    },
  }
}
