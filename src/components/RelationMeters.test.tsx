import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RelationMeters } from "./RelationMeters.tsx";

describe("RelationMeters accessibility", () => {
  it("names every exact progressbar with its dimension, value, and direction", () => {
    render(
      <RelationMeters
        exact
        state={{ attraction: 90, trust: 85, comfort: 95, conflict: 0 }}
      />,
    );

    expect(screen.getByRole("progressbar", { name: "吸引 90 / 100，越高越有火花" })).toBeInTheDocument();
    expect(screen.getByRole("progressbar", { name: "信任 85 / 100，越高越放心" })).toBeInTheDocument();
    expect(screen.getByRole("progressbar", { name: "舒适 95 / 100，越高越自在" })).toBeInTheDocument();
    expect(screen.getByRole("progressbar", { name: "冲突 0 / 100，越低越平静" })).toBeInTheDocument();
  });
});
