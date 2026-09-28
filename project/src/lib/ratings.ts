import { supabase } from './supabase';

export function getUserFingerprint(): string {
  const KEY = 'neorixy-fp';
  let fp = localStorage.getItem(KEY);
  if (!fp) {
    fp = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(KEY, fp);
  }
  return fp;
}

export async function getRatingStats(targetType: string, targetSlug: string) {
  const { data } = await supabase
    .from('ratings')
    .select('rating')
    .eq('target_type', targetType)
    .eq('target_slug', targetSlug);

  if (!data || data.length === 0) return { average: 0, count: 0 };

  const sum = data.reduce((acc, r) => acc + r.rating, 0);
  return { average: sum / data.length, count: data.length };
}

export async function getUserRating(targetType: string, targetSlug: string) {
  const fp = getUserFingerprint();
  const { data } = await supabase
    .from('ratings')
    .select('rating')
    .eq('target_type', targetType)
    .eq('target_slug', targetSlug)
    .eq('user_fingerprint', fp)
    .maybeSingle();

  return data?.rating ?? 0;
}

export async function submitRating(targetType: string, targetSlug: string, rating: number) {
  const fp = getUserFingerprint();
  const { data: existing } = await supabase
    .from('ratings')
    .select('id')
    .eq('target_type', targetType)
    .eq('target_slug', targetSlug)
    .eq('user_fingerprint', fp)
    .maybeSingle();

  if (existing) {
    await supabase
      .from('ratings')
      .update({ rating })
      .eq('id', existing.id);
  } else {
    await supabase
      .from('ratings')
      .insert({ target_type: targetType, target_slug: targetSlug, rating, user_fingerprint: fp });
  }
}
