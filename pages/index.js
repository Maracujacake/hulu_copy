import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utilities/requests'


export default function Home( {results} ) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <Header/>
      {/*navbar*/}
      <Navbar/>
      {/*results*/}
      <Results results={results}/>
    </div>
  )
}

export async function  getServerSideProps(context){
  const genre = context.query.genre

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then(res => res.json());

  return {
    props: {
      results: request.results,
    }
  }
}
