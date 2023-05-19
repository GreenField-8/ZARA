import React from 'react';

const SearchPage = () => {
  return (
    <div style={{ borderBottom: '1px solid #ccc' }}>
      <input
        type="text"
        style={{
          width: '100%',
          height: '40px',
          border: 'none',
          fontSize: '16px',
          padding: '8px',
          outline: 'none',
        }}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchPage;
