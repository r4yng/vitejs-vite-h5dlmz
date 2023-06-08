type Props = {
  page: number;
  setPage: (pageNumber: number) => void;
  totalPages: number;
};

export const Paginator = ({ page, setPage, totalPages }: Props) => {
  return (
    <div className="paginator">
      <button
        onClick={() => setPage((page) => Math.max(1, page - 1))}
        disabled={page === 1}
      >
        Previous Page
      </button>
      <div>Page {page}</div>
      <button
        onClick={() => setPage((page) => page + 1)}
        disabled={page === totalPages}
      >
        Next Page
      </button>
    </div>
  );
};
