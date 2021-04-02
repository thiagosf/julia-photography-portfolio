import { Photo } from '../components/organisms/CarouselPhotos/CarouselPhotos'

export const fetchAPI = async function (query: string, { variables }: any = {}): Promise<any> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

const ensureMediaUrl = (value: string): string => {
  if (!value.startsWith('http')) {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${value}`
  }
  return value
}

export const getPhotos = async function (filters?: any): Promise<any> {
  const data = await fetchAPI(`
    query Photos($where: JSON){
      photos(sort: "published_at:desc", limit: 1000, where: $where) {
        id
        title
        slug
        published_at
        tags {
          id
          name
          slug
        }
        media {
          url
        }
      }
    }
    `,
    {
      variables: {
        where: filters,
      },
    }
  )
  return data?.photos.map((photo: any): Photo => {
    const link = `/photos/${photo.slug}`
    const fullLink = `https://julia.photos/photos/${photo.slug}`
    return {
      url: ensureMediaUrl(photo.media.url),
      title: photo.title,
      slug: photo.slug,
      tags: photo.tags.map((tag: any) => tag.name),
      link,
      fullLink
    }
  })
}

export const getTags = async function (): Promise<any> {
  const data = await fetchAPI(`
    query Tags {
      tags(sort: "name:asc", limit: 1000) {
        id
        name
        slug
      }
    }
    `
  )
  return data?.tags
}

export const getAbout = async function (): Promise<any> {
  const data = await fetchAPI(`
    query About {
      about {
        text
        photo {
          url
        }
      }
    }
    `
  )
  return {
    ...data?.about,
    photo: {
      ...data?.about.photo,
      url: ensureMediaUrl(data?.about.photo.url)
    }
  }
}
