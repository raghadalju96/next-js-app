"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error }: Props) => {
  console.log("Error ", error);

  return <div>An unexpected error</div>;
};

export default ErrorPage;
