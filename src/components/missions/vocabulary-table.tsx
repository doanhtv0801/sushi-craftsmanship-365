import type { VocabularyEntry } from "@/types/database";

export function VocabularyTable({ vocabulary }: { vocabulary: VocabularyEntry[] }) {
  if (vocabulary.length === 0) return null;

  return (
    <div className="overflow-x-auto rounded-md border border-border">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-washi text-xs uppercase tracking-wide text-sumi">
            <th className="px-4 py-3 font-medium">Japanese</th>
            <th className="px-4 py-3 font-medium">Reading</th>
            <th className="px-4 py-3 font-medium">English</th>
            <th className="px-4 py-3 font-medium">Vietnamese</th>
          </tr>
        </thead>
        <tbody>
          {vocabulary.map((v, i) => (
            <tr
              key={v.id}
              className={i % 2 === 0 ? "bg-washi-soft" : "bg-washi-soft/40"}
            >
              <td className="font-jp px-4 py-3 text-base text-ink">{v.japanese}</td>
              <td className="font-jp px-4 py-3 text-sumi">{v.reading}</td>
              <td className="px-4 py-3 text-ink">{v.english}</td>
              <td className="px-4 py-3 text-ink">{v.vietnamese}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
