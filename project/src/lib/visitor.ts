import { supabase } from './supabase';

export async function registerView(targetType: string, targetSlug: string) {
  const { data: existing } = await supabase
    .from('item_views')
    .select('id, views')
    .eq('target_type', targetType)
    .eq('target_slug', targetSlug)
    .maybeSingle();

  if (existing) {
    await supabase
      .from('item_views')
      .update({ views: existing.views + 1 })
      .eq('id', existing.id);
    return existing.views + 1;
  } else {
    await supabase
      .from('item_views')
      .insert({ target_type: targetType, target_slug: targetSlug, views: 1 });
    return 1;
  }
}

export async function getViewCount(targetType: string, targetSlug: string) {
  const { data } = await supabase
    .from('item_views')
    .select('views')
    .eq('target_type', targetType)
    .eq('target_slug', targetSlug)
    .maybeSingle();

  return data?.views ?? 0;
}
