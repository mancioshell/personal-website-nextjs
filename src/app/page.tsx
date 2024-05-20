import SectionPage from "./components/section";

import Profile from "@/app/components/profile.server";
import ProfileSkeleton from "@/components/profile-skeleton";
import { Suspense } from "react";

export default async function Page() {
  return (
    <SectionPage>
      <Suspense fallback={<ProfileSkeleton />}>
        <Profile />
      </Suspense>
    </SectionPage>
  );
}
