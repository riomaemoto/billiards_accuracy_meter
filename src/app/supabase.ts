import { createClient } from "@supabase/supabase-js";
import { StatType } from "./atom";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchStatsData = async () => {
  const { data } = await supabase.from("statsData").select("*");

  return data as StatType[];
};

export const sendStatsData = async (statsData: StatType) => {
  const { data, error } = await supabase
    .from("statsData")
    .insert(statsData)
    .select();
  if (error) {
    throw new Error("Failed to send stats data");
  }
  return data[0];
};

export const upDateStatsData = async (statsData: StatType) => {
  await supabase.from("statsData").update(statsData).eq("id", statsData.id);
};
