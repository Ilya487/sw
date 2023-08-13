import React from "react";

const EntityListControl = ({ switchPage, prevNext }) => {
  function setNextPage() {
    switchPage((prev) => {
      const currentPage = +prev.get("page");
      return { page: currentPage + 1 };
    });
  }

  function setPrevPage() {
    switchPage((prev) => {
      const currentPage = +prev.get("page");
      return { page: currentPage - 1 };
    });
  }

  return (
    <div>
      <button disabled={prevNext.prev ? false : true} onClick={setPrevPage}>
        Prev
      </button>
      <button disabled={prevNext.next ? false : true} onClick={setNextPage}>
        Next
      </button>
    </div>
  );
};

export default EntityListControl;
