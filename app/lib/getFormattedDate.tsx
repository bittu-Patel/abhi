export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-india', { dateStyle: 'long' }).format(new Date(dateString))
}
