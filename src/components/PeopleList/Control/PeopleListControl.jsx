import React from "react";

const PeopleListControl = ({ switchPage, prevNext, currentPage }) => {
  function setNextPage() {
    switchPage({ page: currentPage + 1 });
  }

  function setPrevPage() {
    switchPage({ page: +currentPage - 1 });
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

export default PeopleListControl;
