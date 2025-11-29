// This code assumes the main Supabase library (window.supabase)
// is already loaded in your HTML from a <script> tag.

const supabaseUrl = 'https://ywtvoduhhpslxuuvhtvo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3dHZvZHVoaHBzbHh1dXZodHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMzY4NTIsImV4cCI6MjA3OTgxMjg1Mn0.l9qrE5pWCVa2g9KG4aVpGOHnug0wHHW7Cy6KIqsbE-w';
// const supabaseUrl = 'https://amkuzgnxygxlhgmqbthp.supabase.co';
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFta3V6Z254eWd4bGhnbXFidGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NTk5MDksImV4cCI6MjA3ODMzNTkwOX0.PD2p8dSsgCgWl4T53U4q2Sr05xIMxeGZQrlUryRd8dQ';

// Create the one, single client
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

// Export it for other files to use
export const supabase = supabaseClient;