import { format, formatDistance } from 'date-fns'

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return format(date, 'MMMM d, yyyy')
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  return formatDistance(date, new Date(), { addSuffix: true })
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}