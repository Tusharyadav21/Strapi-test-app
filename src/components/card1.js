import React from 'react';
import Link from "next/link";
import { Img, Text } from ".";
import config from '@/config';

const Card1 = ({ story }) => {

    const date = story.publishedAt.split('T')[0].split('-');
    const authors = story.authors.data;
    const hero_image = story.hero_image.data.attributes.url;

    return (
        <Link href={"/latest/" + story.slug} >
            <div className="bg-white-A700 flex flex-1 flex-col gap-[19px] items-center justify-start pb-6 rounded shadow-bs w-full">
                <Img
                    className="h-[236px] md:h-auto object-cover rounded-tl rounded-tr w-full"
                    src={config.api + hero_image}
                    alt="Bitmap One"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-[87%] md:w-full">
                    <div className="flex flex-row w-[66%] md:w-full">
                        {authors.map((author, idx) => {
                            return (
                                <Text key={idx}
                                    className="text-bluegray-600 text-sm"
                                    size="txtMontserratRomanRegular14"
                                >
                                    {author.attributes.name}
                                </Text>)
                        })}
                        <Text
                            className="ml-2 text-bluegray-600 text-sm text-right"
                            size="txtMontserratRomanRegular14"
                        >
                            {date[2] + ' / ' + date[1] + ' / ' + date[0]}
                        </Text>
                    </div>
                    <Text
                        className="leading-[27.00px] text-bluegray-900 text-lg w-full"
                        size="txtMontserratBold18"
                    >
                        <>{story.headline}</>
                    </Text>
                </div>
            </div>
        </Link>
    )
}

export default Card1
