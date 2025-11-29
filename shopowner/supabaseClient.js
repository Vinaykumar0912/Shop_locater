// This code assumes the main Supabase library (window.supabase)
// is already loaded in your HTML from a <script> tag.

const supabaseUrl = 'https://foauexzwzrfurtgzryey.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvYXVleHp3enJmdXJ0Z3pyeWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MTUzNTYsImV4cCI6MjA3OTk5MTM1Nn0.6222msfZyn9KeOQN6NXgt9OINsrXZlSAmRf2IG_3nww';

// Create the one, single client
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

// Export it for other files to use
export const supabase = supabaseClient;