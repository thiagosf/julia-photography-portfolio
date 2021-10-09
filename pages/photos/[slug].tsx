import Head from 'next/head'
import { useRouter } from 'next/router'
import { MainTemplate } from '../../components/templates/MainTemplate/MainTemplate'
import { getPhoto } from '../../utils/api'

export default function HomePage({ photo, filters }) {
  const router = useRouter()
  const onFilter = (value: string) => {
    router.push('/')
  }
  return (
    <div>
      <Head>
        <title>julia.photos</title>
      </Head>
      <MainTemplate
        currentFilter="all"
        filters={filters}
        onFilter={onFilter}
      >
        <div className="flex p-4 pt-40 md:p-12 md:pt-12 flex-col">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full"
          />
          <div className="">
            <div className="text-base pt-5 flex justify-between w-full opacity-50">
              <div className="font-bold">{photo.title}</div>
              <div>#{photo.tags.join(' #')}</div>
            </div>
          </div>
        </div>
      </MainTemplate>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const id = +context.params.slug.split('-').shift()
  const photo = await getPhoto(id)
  if (!photo) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      filters: [
        {
          label: 'Back',
          value: 'back'
        }
      ],
      photo
    }
  }
}
