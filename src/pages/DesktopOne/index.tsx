import React from "react";

import { Button, Input, Text } from "components";

const DesktopOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[57px] w-full">
        <div className="bg-blue-A100 flex flex-col items-center justify-end p-[61px] md:px-10 sm:px-5 w-full">
          <Text
            className="mt-2.5 md:text-5xl text-6xl text-black-900"
            size="txtInterRegular60"
          >
            Registration Form{" "}
          </Text>
        </div>
        <div className="bg-indigo-100 flex flex-col items-center justify-start p-[21px] sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[134px] justify-start max-w-[1235px] mb-[67px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-1 py-1.5 w-[42%] md:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    First Name
                  </Text>
                  <Input
                    name="frame"
                    placeholder="Required"
                    className="p-0 placeholder:text-gray-800_e5 sm:pr-5 text-gray-800_e5 text-left text-sm w-full"
                    wrapClassName="bg-white-A700 border border-gray-300 border-solid mt-1 pl-[15px] pr-[35px] py-[15px] rounded-[5px] w-full"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start mb-1 py-1.5 w-[42%] md:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    Last Name
                  </Text>
                  <Input
                    name="frame_One"
                    placeholder="Required"
                    className="p-0 placeholder:text-gray-800_e5 sm:pr-5 text-gray-800_e5 text-left text-sm w-full"
                    wrapClassName="bg-white-A700 border border-gray-300 border-solid mt-1 pl-[15px] pr-[35px] py-[15px] rounded-[5px] w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[21px] w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-1 py-1.5 w-[42%] md:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    E-mail
                  </Text>
                  <Input
                    name="frame_Two"
                    placeholder="Required"
                    className="p-0 placeholder:text-gray-800_e5 sm:pr-5 text-gray-800_e5 text-left text-sm w-full"
                    wrapClassName="bg-white-A700 border border-gray-300 border-solid mt-1 pl-[15px] pr-[35px] py-[15px] rounded-[5px] w-full"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start mb-1 py-1.5 w-[42%] md:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    Password
                  </Text>
                  <Input
                    name="frame_Three"
                    placeholder="Required"
                    className="p-0 placeholder:text-gray-800_e5 sm:pr-5 text-gray-800_e5 text-left text-sm w-full"
                    wrapClassName="bg-white-A700 border border-gray-300 border-solid mt-1 pl-[15px] pr-[35px] py-[15px] rounded-[5px] w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-7 w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start py-1.5 w-[42%] md:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    Phone number
                  </Text>
                  <Input
                    name="frame_Four"
                    placeholder="Required"
                    className="p-0 placeholder:text-gray-800_e5 sm:pr-5 text-gray-800_e5 text-left text-sm w-full"
                    wrapClassName="bg-white-A700 border border-gray-300 border-solid mt-1 pl-[15px] pr-[35px] py-[15px] rounded-[5px] w-full"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start py-[7px] w-[42%] md:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    Alternate Phone number (optional)
                  </Text>
                  <Input
                    name="frame_Five"
                    placeholder="Optional"
                    className="p-0 placeholder:text-gray-800_e5 sm:pr-5 text-gray-800_e5 text-left text-sm w-full"
                    wrapClassName="bg-white-A700 border border-gray-300 border-solid my-0.5 pl-[15px] pr-[35px] py-[15px] rounded-[5px] w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[58px] w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start py-1.5 w-[42%] md:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    Address
                  </Text>
                  <Input
                    name="frame_Six"
                    placeholder="Required"
                    className="p-0 placeholder:text-gray-800_e5 sm:pr-5 text-gray-800_e5 text-left text-sm w-full"
                    wrapClassName="bg-white-A700 border border-gray-300 border-solid mt-1 pl-[15px] pr-[35px] py-[15px] rounded-[5px] w-full"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start py-1.5 w-[42%] md:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    Pincode
                  </Text>
                  <Input
                    name="frame_Seven"
                    placeholder="Required"
                    className="p-0 placeholder:text-gray-800_e5 sm:pr-5 text-gray-800_e5 text-left text-sm w-full"
                    wrapClassName="bg-white-A700 border border-gray-300 border-solid mt-1 pl-[15px] pr-[35px] py-[15px] rounded-[5px] w-full"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-montserrat items-center justify-center md:ml-[0] ml-[582px] py-[3px] w-auto">
              <Button className="bg-light_blue-A700 cursor-pointer font-semibold min-w-[121px] py-[21px] rounded-[30px] shadow-bs text-center text-sm text-white-A700">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
