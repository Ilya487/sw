import React from "react";

const PeopleListControl = ({ setCurrentPage, prevNext }) => {
  return (
    <div>
      <button
        disabled={prevNext.prev ? false : true}
        onClick={() => setCurrentPage((p) => p - 1)}
      >
        Prev
      </button>
      <button
        disabled={prevNext.next ? false : true}
        onClick={() => setCurrentPage((p) => p + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PeopleListControl;
