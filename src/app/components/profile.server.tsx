import { getProfile } from "@/app/actions";
import Profile from "@/app/components/profile.client";

export default async function ServerProfile() {
  const { data, error } = await getProfile();

  if (error) {
    throw new Error(error.message);
  }

  return <Profile data={data}></Profile>;
}
