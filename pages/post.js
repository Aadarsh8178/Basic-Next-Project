import Layout from '../components/Layout'

const Post = ({url})=>{
    return (
        <Layout title={url.query.title}>
            <p>Random text</p>
        </Layout>

    )
}
export default Post