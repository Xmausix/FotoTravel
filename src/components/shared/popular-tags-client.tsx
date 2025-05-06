"use client";

import type * as React from 'react';
import { Badge } from '@/components/ui/badge';

interface PopularTagsClientProps {
  tags: string[];
}

export function PopularTagsClient({ tags }: PopularTagsClientProps) {
  const handleTagClick = (tag: string) => {
    // In a real application, you would implement filtering logic here
    // For example, redirecting to a page with posts filtered by this tag
    // or updating a state that controls the displayed posts.
    alert(`Filtering by tag: ${tag}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="outline"
          className="px-4 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
          onClick={() => handleTagClick(tag)}
          // Adding ARIA role for better accessibility
          role="button"
          tabIndex={0}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleTagClick(tag);
            }
          }}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
