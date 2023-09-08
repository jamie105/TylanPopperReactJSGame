// CreateBushMimic.js
import React, { useEffect } from 'react';

const CreateBushMimic = ({ x, y }) => {
  useEffect(() => {
    console.log(`Created bush at X: ${x}, Y: ${y}, Timestamp: ${Date.now()}`);
  }, [x, y]);

  return null;
};

export default CreateBushMimic;
