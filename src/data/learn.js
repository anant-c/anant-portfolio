/**
 * Validate that a slug contains only lowercase alphanumeric characters and hyphens.
 * Guards against path traversal and malformed URLs.
 */
export function isValidSlug(slug) {
  return typeof slug === 'string' && /^[a-z0-9-]+$/.test(slug);
}

/**
 * Format duration in minutes into a human-readable string like "11h 4m", "1h", or "45m".
 */
export function formatDuration(duration_min) {
  if (!duration_min || typeof duration_min !== 'number' || duration_min <= 0) {
    return '';
  }
  const totalMinutes = Math.round(duration_min);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0 && minutes > 0) {
    return `${hours}h ${minutes}m`;
  }
  if (hours > 0) {
    return `${hours}h`;
  }
  return `${minutes}m`;
}

/**
 * Format video count and duration together, e.g. "14 videos · 11h 4m" or "45m".
 */
export function formatVideosAndDuration(videos, duration_min) {
  const durationText = formatDuration(duration_min);
  const hasVideos = typeof videos === 'number' && videos > 0;
  const videosText = hasVideos ? `${videos} ${videos === 1 ? 'video' : 'videos'}` : '';

  if (videosText && durationText) {
    return `${videosText} · ${durationText}`;
  }
  if (videosText) {
    return videosText;
  }
  return durationText;
}

/**
 * Format a YYYY-MM-DD date string into "added <Mon YYYY>", e.g. "added Mar 2026".
 */
export function formatAddedDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return '';
  const match = dateStr.match(/^(\d{4})-(\d{2})(?:-\d{2})?$/);
  if (!match) return `added ${dateStr}`;

  const year = match[1];
  const monthIdx = parseInt(match[2], 10) - 1;
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  if (monthIdx >= 0 && monthIdx < 12) {
    return `added ${months[monthIdx]} ${year}`;
  }
  return `added ${dateStr}`;
}
