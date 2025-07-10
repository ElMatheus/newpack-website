import { JSX } from "react";

export default async function awaitPromise<T>({
  promise,
  children
}: {
  promise: Promise<T>
  children: (value: T) => JSX.Element
}) {
  let data = await promise;
  return children(data);
}