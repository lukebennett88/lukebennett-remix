import { type MetaFunction } from "remix";
import { getProseClasses } from "~/utils/get-prose-classes";
import { pageWrapperClasses } from "~/utils/page-wrapper-classes";

export const meta: MetaFunction = () => {
  return { title: "Ain't nothing here" };
};

export default function NotFoundPage(): JSX.Element {
  return (
    <div className={pageWrapperClasses}>
      <div className={getProseClasses()}>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
}
