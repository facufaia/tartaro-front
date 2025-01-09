"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[90svh] flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-primary text-white rounded-md"
      >
        Try again
      </button>
    </div>
  );
}
