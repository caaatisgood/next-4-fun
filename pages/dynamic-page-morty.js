import Nav from '../components/Nav'

export const getServerSideProps = () => {
  return {
    props: {
      title: 'morty',
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
