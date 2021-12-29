import { classNames } from "./classnames";

export function getProseClasses({ isCentered }: { isCentered?: boolean } = {}): string {
  return classNames(
    "prose dark:prose-dark dark:prose-invert dark:prose-headings:font-medium prose-blockquote:border-teal-600 dark:prose-blockquote:border-orange-400 dark:prose-li:marker:bg-orange-600",
    isCentered && "mx-auto",
  );
}
