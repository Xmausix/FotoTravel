export function shareOnLinkedIn(postUrl: string): void {
    const encodedUrl = encodeURIComponent(postUrl);
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=400");
}
