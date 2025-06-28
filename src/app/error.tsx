"use client";

export default function Error() {
  return (
    <div className="h-screen w-full flex flex-row justify-center items-center px-5">
      <div className="flex flex-col gap-6 items-center text-center">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-xl md:text-3xl font-semibold">
            Opps! Something Went Wrong
          </h1>
          <div>Try again</div>
        </div>
      </div>
    </div>
  );
}
