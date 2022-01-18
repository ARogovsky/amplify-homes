/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Home } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import HeroLayout1 from "./HeroLayout1";
import { Collection } from "@aws-amplify/ui-react";
export default function NewHomes(props) {
  const { Card, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Home,
        }).items;
  return (
    <Collection
      type="list"
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <HeroLayout1
          Card={item}
          height="auto"
          margin="5px 0 5px 0px"
          width="auto"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.HeroLayout1[0]")}
        ></HeroLayout1>
      )}
    </Collection>
  );
}
