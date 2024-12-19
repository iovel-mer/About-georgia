// Import the Supabase client
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zsagpytamvnkshofuelp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzYWdweXRhbXZua3Nob2Z1ZWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMTkyNTIsImV4cCI6MjA0OTY5NTI1Mn0.IpEFvWxMVZspNp2wlyTUubNEKnOEa0yH9X3muiuCTXM"
export const supabase = createClient(supabaseUrl, supabaseKey);
