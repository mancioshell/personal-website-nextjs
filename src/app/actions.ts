"use server";

import { getClient } from "@/lib/client";
import { profile } from "@/queries/profile.graphql";
import { skills } from "@/queries/skills.graphql";
import { educations } from "@/queries/educations.graphql";
import { professionalExperience } from "@/queries/professional-experience.graphql";

export async function getSkills() {
  console.log("getSkills");
  const client = getClient();
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return client.query({ query: skills });
}

export async function getProfessionalExperiences() {
  console.log("getProfessionalExperiences");
  const client = getClient();
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return client.query({ query: professionalExperience });
}

export async function getEducations() {
  console.log("getEducations");
  const client = getClient();
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return client.query({ query: educations });
}

export async function getProfile() {
  console.log("getProfile");
  const client = getClient();
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return client.query({ query: profile });
}
