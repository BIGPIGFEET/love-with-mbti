import type {
  EndingContent,
  FuzzyFeedbackContent,
  Question,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const AVAILABLE_MBTI_TYPES = [
  "INTJ",
  "ENTJ",
  "ESTJ",
  "ESTP",
  "ENTP",
  "ENFP",
  "ENFJ",
  "ESFJ",
  "ESFP",
  "INTP",
  "INFJ",
  "INFP",
  "ISTJ",
  "ISFJ",
  "ISFP",
  "ISTP",
] as const;

export type AvailableMbtiType = (typeof AVAILABLE_MBTI_TYPES)[number];

export interface ContentPack {
  readonly type: AvailableMbtiType;
  readonly description: string;
  readonly questions: readonly Question[];
  readonly endings: readonly EndingContent[];
  readonly relationshipEvaluations: readonly RelationshipEvaluationContent[];
  readonly fuzzyFeedback: readonly FuzzyFeedbackContent[];
}

export const TYPE_DESCRIPTIONS = {
  INTJ: "十次结构协商、直接表达、独处边界与关系确认之间的取舍。",
  ENTJ: "十次目标协作、直接表达、权力边界与共同确认之间的取舍。",
  ESTJ: "十次计划协商、实际照顾、边界修复与关系确认之间的取舍。",
  ESTP: "十次临场体验、直接表达、风险边界与关系确认之间的取舍。",
  ENTP: "十次新鲜感、边界、信任与长期兑现之间的取舍。",
  ENFP: "十次热情表达、探索变化、私人边界与关系确认之间的取舍。",
  ENFJ: "十次群体参与、建议许可、支持互惠与关系协议之间的取舍。",
  ESFJ: "从日常照顾、朋友聚会到一起分担事情，在十次选择中慢慢说清你们的关系。",
  ESFP: "十次共同体验、临场弹性、边界确认与关系修复之间的取舍。",
  INTP: "十次思想火花、表达节奏、共同边界与独立空间之间的取舍。",
  INFJ: "十次深度交流、隐私边界、支持互惠与明确关系之间的取舍。",
  INFP: "十次真实表达、理想落地、边界确认与关系维护之间的取舍。",
  ISTJ: "十次共同安排、行动关心、承诺边界与关系确认之间的取舍。",
  ISFJ: "十次社交节奏、实际照顾、角色边界与关系确认之间的取舍。",
  ISFP: "十次具体体验、安静边界、隐私责任与共同修复之间的取舍。",
  ISTP: "十次沟通节奏、具体协作、个人空间与明确关系之间的取舍。",
} as const satisfies Record<AvailableMbtiType, string>;
