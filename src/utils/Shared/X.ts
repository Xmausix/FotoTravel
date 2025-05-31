export function shareOnTwitter(postUrl: string, text?: string, hashtags?: string[]): void {
    const encodedUrl = encodeURIComponent(postUrl);
    const encodedText = text ? `&text=${encodeURIComponent(text)}` : "";
    const encodedHashtags = hashtags?.length ? `&hashtags=${encodeURIComponent(hashtags.join(","))}` : "";

    const shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}${encodedText}${encodedHashtags}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=400");
}
