"use client";

export default function error({ error, reset }) {
  return (
    <div>
      this ain't loading up : {error.message}
      <button className="border p-2" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
}
