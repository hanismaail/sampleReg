import React from "react";

import { Button, Img, Text } from "components";

const DesktopOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[61px] w-full">
        <div className="bg-blue-A100 flex flex-col items-center justify-end p-[61px] md:px-10 sm:px-5 w-full">
          <Text
            className="mt-2.5 md:text-5xl text-6xl text-black-900"
            size="txtInterRegular60"
          >
            Registration Form{" "}
          </Text>
        </div>
        <div className="bg-indigo-100 flex flex-col items-center justify-end p-[73px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1246px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="bg-blue_gray-100 h-[72px] justify-center pl-[18px] sm:pr-5 pr-[35px] py-[17px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_b7 w-[529px]"
                size="txtInterRegular30"
              >
                First name
              </Text>
              <Text
                className="bg-blue_gray-100 h-[72px] justify-center pl-[18px] sm:pr-5 pr-[35px] py-[17px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_7a w-[529px]"
                size="txtInterRegular30Black9007a"
              >
                Last name
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[57px] w-full">
              <Text
                className="bg-blue_gray-100 h-[72px] justify-center pl-5 sm:pr-5 pr-[35px] py-[17px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_7a w-[529px]"
                size="txtInterRegular30Black9007a"
              >
                E-mail
              </Text>
              <Text
                className="bg-blue_gray-100 h-[72px] justify-center pl-[18px] sm:pr-5 pr-[35px] py-[17px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_7a w-[529px]"
                size="txtInterRegular30Black9007a"
              >
                Password
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[57px] w-full">
              <div className="bg-blue_gray-100 flex md:flex-1 flex-row sm:gap-10 items-center justify-between p-3 w-[43%] md:w-full">
                <Text
                  className="ml-[5px] my-[5px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_7a"
                  size="txtInterRegular30Black9007a"
                >
                  Gender
                </Text>
                <Img
                  className="h-[21px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <Text
                className="bg-blue_gray-100 h-[72px] justify-center pl-[18px] sm:pr-5 pr-[35px] py-[17px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_7a w-[529px]"
                size="txtInterRegular30Black9007a"
              >
                Phone Number
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[57px] w-full">
              <Text
                className="bg-blue_gray-100 h-[72px] justify-center pl-[18px] sm:pr-5 pr-[35px] py-[17px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_7a w-[529px]"
                size="txtInterRegular30Black9007a"
              >
                Address
              </Text>
              <Text
                className="bg-blue_gray-100 h-[72px] justify-center pl-[18px] sm:pr-5 pr-[35px] py-[17px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_7a w-[529px]"
                size="txtInterRegular30Black9007a"
              >
                Pincode
              </Text>
            </div>
            <Button className="bg-light_blue-A700 cursor-pointer leading-[normal] min-w-[317px] mt-[88px] py-1.5 sm:text-[33px] md:text-[39px] text-[43px] text-center text-white-A700">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
