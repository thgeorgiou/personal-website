import { SITE } from "@/config";

export const monthYear = (date: Date) =>
  date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

/** "May 2023 – now" or "Mar 2018 – Apr 2023" */
export const dateRange = (start: Date, end?: Date) =>
  `${monthYear(start)} – ${end ? monthYear(end) : "now"}`;

export const newestFirst =
  <T>(date: (item: T) => Date) =>
  (a: T, b: T) =>
    date(b).valueOf() - date(a).valueOf();

export type Author = { name: string; isMe: boolean };

/**
 * Splits the `;`-separated author strings from cv.toml. A trailing "et al."
 * is reported separately so it can be typeset on its own.
 */
export const parseAuthors = (authors: string) => {
  const names = authors
    .split(";")
    .map(name => name.trim().replace(/^and\s+/, ""))
    .filter(Boolean);

  const last = names.at(-1) ?? "";
  const etAl = /\s*et al\.?$/.test(last);
  if (etAl) names[names.length - 1] = last.replace(/\s*et al\.?$/, "");

  return {
    list: names.map(name => ({ name, isMe: name === SITE.author })),
    etAl,
  };
};
