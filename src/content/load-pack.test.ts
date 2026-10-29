import { describe, expect, it } from "vitest";
import { AVAILABLE_MBTI_TYPES } from "./content-pack.ts";
import { loadContentPack } from "./load-pack.ts";
import { contentPacks } from "./packs.ts";

describe("on-demand content loading", () => {
  it.each(AVAILABLE_MBTI_TYPES)("loads the complete original %s pack", async (type) => {
    expect(await loadContentPack(type)).toEqual(contentPacks[type]);
  });
});
