import Layout from '../components/Layout'
import Link from 'next/link'

const blogs = ()=>{

    const PostLinks = ({title})=>(
        <li>
            <Link href={`/post?title=${title}`}>
                <a>{title}</a>
            </Link>
        </li>
        
    )
    return (
        <Layout title="Blogs">
            <ul>
                <PostLinks title="React"/>
                <PostLinks title="Angular"/>
                <PostLinks title="Vue"/>
            </ul>  
        </Layout>
    )
    
}
export default blogs