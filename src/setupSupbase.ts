import { SupabaseClient, createClient } from '@supabase/supabase-js';

export async function setupSupabase(): Promise<SupabaseClient> {
    let supabaseURL: string | any = process.env.SUPABASE_URL;
    let supabaseKey: string | any = process.env.SUPABASE_KEY;

    return createClient(supabaseURL, supabaseKey);
}
