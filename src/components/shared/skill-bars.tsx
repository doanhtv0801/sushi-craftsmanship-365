import { SKILLS } from "@/data/skills";
import { localize } from "@/types/locale";
import { Progress } from "@/components/ui/progress";
import type { SkillSlug } from "@/types/database";

/** A skill is "maxed" for display purposes at 200 points (~20 missions worth). */
const SKILL_DISPLAY_MAX = 200;

export function SkillBars({ points }: { points: Record<SkillSlug, number> }) {
  return (
    <div className="flex flex-col gap-4">
      {SKILLS.map((skill) => {
        const value = Math.min(100, Math.round(((points[skill.slug] ?? 0) / SKILL_DISPLAY_MAX) * 100));
        return (
          <div key={skill.id}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="font-medium text-ink">{localize(skill.name, "en")}</span>
              <span className="text-xs text-sumi">{value}%</span>
            </div>
            <Progress value={value} />
          </div>
        );
      })}
    </div>
  );
}
