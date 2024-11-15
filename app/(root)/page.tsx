import { STARTUP_QUERY } from "./../../sanity/lib/queries";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard }  from "@/components/StartupCard";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { auth } from "@/auth";

  
export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  

  // Await the searchParams promise and destructure it safely
  // const params = await searchParams;

  // Destructure the query value safely, defaulting to an empty string if undefined
  // const query = params?.query || "";     OR




  const query = (await searchParams).query
  
  const params = { search: query || null }
  
  const session = await auth()
console.log(session?.id)  

  const {data: posts } = await sanityFetch({query: STARTUP_QUERY, params})
  return (
    <>
      <section className="green_container"> 
        
        <h1 className="heading">Pitch Your Startup, <br /> Collaborate with Entrepreneurs. </h1>
        
        <p className="sub-heading !max-w-3xl">
          Pitch Your Ideas, Evaluate - Rate Pitches, and Get Recognized in Virtual Competitions..
        </p>

        <SearchForm query={ query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}" ` : 'All Startups' }
        </p>
       <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard,) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive/>
    </>
  );
}
