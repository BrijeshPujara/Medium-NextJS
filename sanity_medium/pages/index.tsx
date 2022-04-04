import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import Link from 'next/link'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  console.log(posts)
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex items-center justify-between border-y border-black bg-blue-300 py-10 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-9xl underline">
            Stay curious.
          </h1>
          <h2>
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
        </div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://iconape.com/wp-content/png_logo_vector/medium-m.png"
          alt=""
        />
      </div>

      {/* Posts */}
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer border rounded-lg overflow-hidden">
              <img
                className="h-60 w-full  object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
              <div className="flex justify-between bg-white p-5">
                <div>
                  <p className='text-lg font-bold'>{post.title}</p>
                  
                  <p className='text-xs'>
                    {post.description} by {post.author.name}
                  </p>
                </div>

                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  }, 
    description,
  mainImage,
  slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
