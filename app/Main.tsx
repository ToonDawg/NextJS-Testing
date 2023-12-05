import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
export default function Home({ posts }) {
  return (
    <>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="flex-1 space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-3xl lg:text-6xl">
            Revolutionising Lesson Planning for Educators
          </h1>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400 md:text-lg">
            {siteMetadata.description}
          </p>
          <div className="flex justify-center gap-4 md:gap-8">
            <button
              className="h-10 rounded-md bg-black px-4 font-semibold text-white dark:bg-white dark:text-black md:px-6"
              type="submit"
            >
              Start Free
            </button>
            <button
              className="h-10 rounded-md bg-black px-4 font-semibold text-white dark:bg-white dark:text-black md:px-6"
              type="submit"
            >
              How it works
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/static/images/hero_image.png"
            width={300} // Adjusted for smaller screens
            height={300} // Adjusted for smaller screens
            alt="Picture of the author"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  )
}
