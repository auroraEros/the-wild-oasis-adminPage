import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nejskfsgtdkgcbhpzlsf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lanNrZnNndGRrZ2NiaHB6bHNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMzkzODksImV4cCI6MjA0NDkxNTM4OX0.hOhpczKrkROjKM4aEGJSXdo7ukhkKu7gvn-enGzwXW8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
