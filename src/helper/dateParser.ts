/**
 * TODO: add test to this
 */
export function fullDateParser(stringDate: string): string {
  const d = new Date(stringDate);
  const options = { month: 'long', day: '2-digit', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(d);
}
