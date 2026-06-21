"use client";

import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <button className="btn" onClick={() => router.push("/users")}>
      create
    </button>
  );
};

export default NewUserPage;
