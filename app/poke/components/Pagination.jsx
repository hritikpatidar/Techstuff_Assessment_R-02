export default function Pagination({ page, total, onPrev, onNext }) {
  debugger
  return (
    <div className="flex justify-between items-center p-4">
      <span className="font-medium">Total: {total}</span>

      <div className="flex items-center gap-4">
        <button disabled={page === 1} onClick={onPrev}>
          Prev.
        </button>
        <span>{page}</span>
        <button disabled={page === total} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
