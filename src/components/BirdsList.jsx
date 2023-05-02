import React from "react";
import { useFilterContext } from "../context/filterContext";
import { GridView, ListView } from "../components";

const BirdsList = () => {
  const { filteredBirds: birds, gridView } = useFilterContext();

  if (birds.length < 1) {
    return (
      <div>
        <h2>No birds found</h2>
      </div>
    );
  }
  if (gridView === false) {
    return <ListView birds={birds} />;
  }
  return <GridView birds={birds}>product list</GridView>;
};

export default BirdsList;
