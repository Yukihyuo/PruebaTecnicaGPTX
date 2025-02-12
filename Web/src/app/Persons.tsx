import Layout from '@/components/global/layout'

export default function People() {
    const header ={
        breadcrumb1:"Inicio",
        breadcrumb2:"Personas"
    }
  return (
    <Layout header={header} >
        <div>Personas</div>
    </Layout>
  )
}
