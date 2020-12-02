import Nav from '../components/Nav'

export const getServerSideProps = () => {
  return {
    props: {
      title: 'rick',
    },
  }
}

const Page = ({ title }) => (
  <>
    <Nav />
    this is dynamic page {title}
  </>
)

export default Page
