import React from "react";
import Shimmer from "./Shimmer";
import SkeletomElement from "./SkeletonElement";

const SelectonArticls = ({ theme }) => {
  const themeClasses = theme || "light";
  return (
    <div className={`skeleton-wrapper ${themeClasses}`}>
      <div className="skeleton-article">
        <SkeletomElement type="title" />
        <SkeletomElement type="text" />
        <SkeletomElement type="text" />
        <SkeletomElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SelectonArticls;
