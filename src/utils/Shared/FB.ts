export function shareOnFB(postUrl: string): string {
    const encodedPostUrl = encodeURIComponent(postUrl);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=400");
}