import Gallery from "@/app/components/Gallery";

type Props = {
    params: {
        term: string
    }
}

export function generateMetadata({params: {term}}:Props){
    return {
        title:`Results for ${term}`     
    }
}
// Gallery

import React from 'react'

export default function SearchResults({params: {term}}:Props) {
  return (
    <Gallery topic={term} />
  )
}
