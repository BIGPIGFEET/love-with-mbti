import type {
  EndingId,
  RelationEffects,
  RelationshipEvaluationId,
  RelationState,
} from "../content/schema.ts";

export const INITIAL_STATE: Readonly<RelationState> = {
  attraction: 25,
  trust: 25,
  comfort: 25,
  conflict: 10,
};

export const STAGE_THRESHOLDS = {
  afterQ02: { attraction: 25, trust: 20, comfort: 20, conflict: 20 },
  afterQ05: { attraction: 35, trust: 30, comfort: 25, conflict: 45 },
  afterQ08: { attraction: 45, trust: 40, comfort: 35, conflict: 45 },
} as const;

export interface EndingResult {
  endingId: EndingId;
  evaluationId?: RelationshipEvaluationId;
}

export function clampRelationValue(value: number): number {
  return Math.max(0, Math.min(100, value));
}

export function applyEffects(state: RelationState, effects: RelationEffects): RelationState {
  return {
    attraction: clampRelationValue(state.attraction + effects.attraction),
    trust: clampRelationValue(state.trust + effects.trust),
    comfort: clampRelationValue(state.comfort + effects.comfort),
    conflict: clampRelationValue(state.conflict + effects.conflict),
  };
}

export function resolveEnding(
  questionOrder: number,
  state: RelationState,
): EndingResult | null {
  if (state.conflict >= 80) return { endingId: "conflict_break" };
  if (state.comfort <= 5) return { endingId: "strong_discomfort" };
  if (state.trust <= 5) return { endingId: "trust_broken" };

  if (
    questionOrder === 2 &&
    !(
      state.trust >= STAGE_THRESHOLDS.afterQ02.trust &&
      state.attraction >= STAGE_THRESHOLDS.afterQ02.attraction &&
      state.comfort >= STAGE_THRESHOLDS.afterQ02.comfort &&
      state.conflict <= STAGE_THRESHOLDS.afterQ02.conflict
    )
  ) {
    return { endingId: "no_second_meeting" };
  }

  if (
    questionOrder === 5 &&
    !(
      state.trust >= STAGE_THRESHOLDS.afterQ05.trust &&
      state.attraction >= STAGE_THRESHOLDS.afterQ05.attraction &&
      state.comfort >= STAGE_THRESHOLDS.afterQ05.comfort &&
      state.conflict <= STAGE_THRESHOLDS.afterQ05.conflict
    )
  ) {
    return { endingId: "fade_out" };
  }

  if (
    questionOrder === 8 &&
    !(
      state.attraction >= STAGE_THRESHOLDS.afterQ08.attraction &&
      state.trust >= STAGE_THRESHOLDS.afterQ08.trust &&
      state.comfort >= STAGE_THRESHOLDS.afterQ08.comfort &&
      state.conflict <= STAGE_THRESHOLDS.afterQ08.conflict
    )
  ) {
    return { endingId: "stay_acquaintances" };
  }

  if (questionOrder !== 10) return null;

  if (state.trust < 35 || state.comfort < 35 || state.conflict > 50) {
    return { endingId: "strangers_after_all" };
  }

  if (state.attraction >= 85 && state.trust >= 65 && state.comfort >= 60 && state.conflict <= 25) {
    const evaluationId =
      state.trust >= 75 && state.comfort >= 70 && state.conflict <= 15
        ? "romance_stable"
        : "romance_hidden_risk";
    return { endingId: "confirmed_relationship", evaluationId };
  }

  if (state.attraction >= 90 && (state.trust < 65 || state.comfort < 60)) {
    return { endingId: "dangerous_lovers" };
  }

  if (state.attraction < 65 && state.trust >= 50 && state.comfort >= 45 && state.conflict <= 40) {
    return { endingId: "friends" };
  }

  return { endingId: "unresolved_ambiguity" };
}

export function endingResultKey(result: EndingResult): string {
  return result.evaluationId ? `${result.endingId}:${result.evaluationId}` : result.endingId;
}
