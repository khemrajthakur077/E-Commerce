import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sutqlmrniovknusykbnr.supabase.co";
const supabaseKey = "sb_publishable_VQny_1pvcN-AFvavu3a4xA_42260pjQ";

export const supabase = createClient(supabaseUrl, supabaseKey);