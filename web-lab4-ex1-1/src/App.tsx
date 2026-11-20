
import { lazy, Suspense, useState } from "react";
import Skeleton from "./Skeleton";
import "./App.css";

// Lazy loading: PersonDetail is loaded on demand.
const PersonDetail = lazy(() => import("./PersonDetail"));

export default function App() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <main className="app">
      <header>
        <h1>Lab 4 - Exercise 1.1</h1>
        <p>React 19 Lazy Loading and Suspense</p>
      </header>

      <button
        type="button"
        onClick={() => setShowDetail((prev) => !prev)}
      >
        {showDetail ? "Hide Details" : "Show Person Detail"}
      </button>

      <div className="detail-container">
        {showDetail && (
          <Suspense fallback={<Skeleton />}>
            <PersonDetail />
          </Suspense>
        )}
      </div>
    </main>
  );
}
