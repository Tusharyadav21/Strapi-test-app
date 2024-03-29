import React from "react";

import { Button, Img, List, Text } from "../../components";
import { Headline } from "@/components/Headline";

const BlogPostsEightPage = () => {
  return (
    <>
      <div className=" flex font-montserrat h-[900px] justify-end mx-auto p-[48px] md:px-10 sm:px-5 relative w-full">
        <div className="absolute flex flex-col gap-[52px] h-max inset-[0] justify-center mx-auto max-w-[1140px] pt-[9px] w-full">
          <div className="flex flex-col gap-[17px] justify-start">
            <Headline>
              Entertainment
            </Headline>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[480px] items-center justify-end pt-[400px] w-[49%] md:w-full"
              style={{
                backgroundImage: "url('images/img_bitmap_312X360.png')",
              }}
            >
              <div className="bg-bluegray-900_99 flex sm:flex-col flex-row gap-[39px] items-center justify-between p-4 w-full">
                <Text
                  className="leading-[24.00px] ml-2 sm:ml-[0] text-base text-white-A700 tracking-[0.29px]"
                  size="txtMontserratBold16WhiteA700"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
                <Button
                  className="flex h-[42px] items-center justify-center mr-2 sm:mt-0 my-[3px] shadow-bs w-[42px]"
                  shape="circle"
                  size="sm"
                >
                  <Img
                    className="h-4"
                    src="images/img_playsolid.svg"
                    alt="playSolid"
                  />
                </Button>
              </div>
            </div>
            <List
              className="flex flex-col gap-[30px] w-[49%]"
              orientation="vertical"
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[225px] items-center justify-start my-0 pt-[145px] w-full"
                style={{ backgroundImage: "url('images/img_bitmap_1.png')" }}
              >
                <div className="bg-bluegray-900_99 flex sm:flex-col flex-row gap-[39px] items-center justify-between p-4 w-full">
                  <Text
                    className="leading-[24.00px] ml-2 sm:ml-[0] text-base text-white-A700 tracking-[0.29px]"
                    size="txtMontserratBold16WhiteA700"
                  >
                    How to Design Your Site to Make it Super-fast
                  </Text>
                  <Button
                    className="flex h-[42px] items-center justify-center mr-2 sm:mt-0 my-[3px] shadow-bs w-[42px]"
                    shape="circle"
                    size="sm"
                  >
                    <Img
                      className="h-4"
                      src="images/img_playsolid.svg"
                      alt="playSolid One"
                    />
                  </Button>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[225px] items-center justify-end my-0 pt-[145px] w-full"
                style={{
                  backgroundImage: "url('images/img_bitmap_236X360.png')",
                }}
              >
                <div className="bg-bluegray-900_99 flex sm:flex-col flex-row gap-[39px] items-center justify-between p-4 w-full">
                  <Text
                    className="leading-[24.00px] ml-2 sm:ml-[0] text-base text-white-A700 tracking-[0.29px]"
                    size="txtMontserratBold16WhiteA700"
                  >
                    <>How Snapchat and Netflix Break UX Design Principles</>
                  </Text>
                  <Button
                    className="flex h-[42px] items-center justify-center mr-2 sm:mt-0 my-[3px] shadow-bs w-[42px]"
                    shape="circle"
                    size="sm"
                  >
                    <Img
                      className="h-4"
                      src="images/img_playsolid.svg"
                      alt="playSolid Two"
                    />
                  </Button>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsEightPage;
