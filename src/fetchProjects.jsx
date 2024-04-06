import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: 's186a7wfan09',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const res = await client.getEntries({ content_type: 'projects' })
      const projects = res.items.map((item) => {
        const { title, url, image } = item.fields
        const { id } = item.sys.id
        const img = image?.fields?.file?.url

        return { title, img, id, url }
      })
      setProjects(projects)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}

client.getEntries({ content_type: 'projects' }).then((res) => { console.log(res) })