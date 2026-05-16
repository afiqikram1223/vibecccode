-- Create the decks table
CREATE TABLE public.decks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    original_text TEXT,
    cards JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) but allow all operations for now
-- (Change this later if you add User Authentication)
ALTER TABLE public.decks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
ON public.decks
FOR SELECT
USING (true);

CREATE POLICY "Allow public insert access"
ON public.decks
FOR INSERT
WITH CHECK (true);
