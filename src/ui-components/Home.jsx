/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Home(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="640px"
      height="668px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="640px"
        height="560px"
        position="absolute"
        left="0px"
        top="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Flex
        gap="10px"
        direction="row"
        width="640px"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left="0px"
        top="560px"
        padding="40px 48px 40px 48px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "View.Flex[0]")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="800"
          color="rgba(35.00000171363354,47.0000009983778,62.00000010430813,1)"
          lineHeight="28.125px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Address"
          {...getOverrideProps(overrides, "View.Flex[0].Text[0]")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="500"
          color="rgba(35.00000171363354,47.0000009983778,62.00000010430813,1)"
          lineHeight="28.125px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="$200M"
          {...getOverrideProps(overrides, "View.Flex[0].Text[1]")}
        ></Text>
      </Flex>
    </View>
  );
}
