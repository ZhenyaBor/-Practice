/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import PaginationMUI from "@mui/material/Pagination";

const Pagination = () => {
  return (
    <div
      css={css`
        width: 400px;
        .css-1y7coo4-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
          color: white;
        }
        .css-1y7coo4-MuiButtonBase-root-MuiPaginationItem-root {
          color: white;
        }
        .css-1v2lvtn-MuiPaginationItem-root {
          color: white;
        }
      `}
    >
      <PaginationMUI count={10} variant="outlined" color="primary" />
    </div>
  );
};

export default Pagination;
