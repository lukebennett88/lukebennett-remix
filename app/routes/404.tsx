import { type MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "Ain't nothing here" };
};

export default function NotFoundPage(): JSX.Element {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
}
