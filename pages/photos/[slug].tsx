import { Default } from '../../components/templates'
import Home from '../../components/pages/Home/Home'
import { getServerSideProps as getServerSidePropsIndex } from '../index'
import Head from 'next/head'
import { Photo as PhotoInterface } from '../../components/organisms/CarouselPhotos/CarouselPhotos';

export default function Photo({ slug, title, image, url, photos, tags, about }) {
  return (
    <Default>
      <Head>
        <title>{title}</title>
        {title && (
          <>
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
          </>
        )}
      </Head>
      <Home
        slug={slug}
        photos={photos}
        tags={tags}
        about={about}
      />
    </Default>
  )
}

export async function getServerSideProps(context: any) {
  let slug = undefined
  let title = 'julia.photos'
  let image = undefined
  let url = undefined
  const result = await getServerSidePropsIndex(context)
  if (result.props.photos) {
    const photo = result.props.photos.find((photo: PhotoInterface) => {
      return photo.slug === context.params.slug
    })
    if (photo) {
      slug = photo.slug
      title = `${photo.title} - ${title}`
      image = photo.url
      url = photo.fullLink
    }
  }
  return {
    ...result,
    props: {
      ...result.props,
      slug,
      title,
      image,
      url,
    }
  }
}
