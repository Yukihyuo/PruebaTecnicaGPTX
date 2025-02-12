import Layout from '@/components/global/layout'

export default function Home() {
    const header ={
        breadcrumb1:"Inicio",
        breadcrumb2:"Inicio"
    }
  return (
    <Layout header={header} >
        <div>Home</div>
    </Layout>
  )
}
