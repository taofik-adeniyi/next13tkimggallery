import type { Photo } from "@/models/Images";
import Image from "next/image";

type Props = {
    photo: Photo
}
import React from 'react'

export default function ImgContainer({photo}:Props) {
  return (
    <div className="h-64 bg-gray-200 group rounded-xl relative overflow-hidden">
        <Image 
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        // width={250} when fill is true do not set width 
        // height={250} when fill is true do not set height 
        className="group-hover:opacity-75 object-cover"
        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        placeholder="blur"
        blurDataURL={photo.blurredDataUrl}
        />
    </div>
  )
}
