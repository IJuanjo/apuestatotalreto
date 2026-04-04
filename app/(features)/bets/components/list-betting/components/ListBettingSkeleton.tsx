const ListBettingSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 max-w-6xl mx-auto py-2xl px-2xl">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="rounded-2xs border-neutral-200 border-solid border bg-white overflow-hidden animate-pulse">
          <div className="flex items-center gap-md border-b border-b-neutral-100 px-lg py-sm">
            <div className="h-5 w-14 rounded-xs bg-neutral-200" />
            <div className="h-3 w-20 rounded bg-neutral-200" />
            <div className="h-3 w-28 rounded bg-neutral-200" />
          </div>

          <div className="flex justify-between py-md px-lg gap-md">
            <div className="flex flex-col gap-xs w-1/2">
              <div className="h-4 w-full rounded bg-neutral-200" />
              <div className="h-4 w-5/6 rounded bg-neutral-200" />
            </div>

            <div className="flex gap-xs items-center">
              <div className="h-12 w-14 rounded-sm bg-neutral-200" />
              <div className="h-12 w-14 rounded-sm bg-neutral-200" />
              <div className="h-12 w-14 rounded-sm bg-neutral-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListBettingSkeleton;
