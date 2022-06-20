/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PaginationMUI from "@mui/material/Pagination";
import { PaginationInterface } from "../interface";

interface Props {
  pagination: PaginationInterface;
  onChenge: (e: any, value: number) => void;
}

const Pagination = ({ onChenge, pagination: { total, page } }: Props) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
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
      <PaginationMUI
        onChange={onChenge}
        page={page}
        count={total}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default Pagination;
