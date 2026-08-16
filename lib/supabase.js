import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  url && key && url !== 'https://YOUR_PROJECT_ID.supabase.co'
    ? createClient(url, key)
    : null;
