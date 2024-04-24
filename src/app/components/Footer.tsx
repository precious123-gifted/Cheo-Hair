import { createClient } from "@/prismicio";

export default async function Footer() {

    const client = createClient()

    const settings = await client.getSingle('app_settings')

  return (
    <div>
      this will be the footer
    </div>
  )
}
