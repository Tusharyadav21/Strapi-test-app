import React from 'react';
import { Img, Text } from ".";
import config from '@/config';

const AuthorCard = ({ author }) => {

    // const date = story.publishedAt.split('T')[0].split('-');
    // const authors = story.authors.data;
    const hero_image = author?.image?.data?.attributes?.url;

    console.log(author)

    return (
        <div className="flex flex-1 flex-col items-center justify-start w-full">


            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-10 pt-10">
                    <Img class="w-48 h-48 mb-3 rounded-full shadow-lg" src={config.api + hero_image} alt="Bonnie image" />
                    <div class="mb-1 text-xl font-medium text-gray-900 dark:text-white">            <Text
                        className="leading-[27.00px] mt-3 text-bluegray-900 text-lg w-full"
                        size="txtMontserratBold18"
                    >
                        {author?.name}
                    </Text></div>
                </div>
            </div>
        </div>

    )
}

export default AuthorCard
