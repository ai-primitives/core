import { Card, Heading } from '@chakra-ui/react'
import { AI } from 'ai-props'
import { headers } from 'next/headers'
import { z } from 'zod'

export const Item: React.FC<{ activity?: string; description?: string }> = ({ activity, description }) => (
  <div>
    <h2>{activity}</h2>
    <p>{description}</p>
  </div>
)

export default async function Page(): Promise<React.JSX.Element> {
  // const { city, country } = geolocation()
  const currentHeaders = await headers()
  const city = currentHeaders.get('X-Vercel-IP-City') || 'San Francisco'
  const country = currentHeaders.get('X-Vercel-IP-Country') || 'US'
  const month = new Date().toLocaleString('default', { month: 'long' })
  // const schema = z.object({
  //   idea: z.string(),
  // })
  const schema = { activity: 'creative, local, fun, and unique idea', description: 'a short description of the activity' }
  return (
    <AI list='10 fun things to do in this city and time of year' args={{ city, country, month }} schema={schema}>
      <Item />
    </AI>
  )
}
