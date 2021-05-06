import React, { FunctionComponent } from 'react';
import WCard from '../../warlock/Card/WCard';

type BlogPreviewCardProps = {
  date: number,
  description: string,
  slug: string,
  title: string,
}

const BlogPreviewCard: FunctionComponent<BlogPreviewCardProps> = ({ date, description, slug, title }) =>
  <WCard
    href={`/articles/${slug}`}
  >
    <h2 className="text-lg font-semibold">
      {title}
    </h2>
    <p className="mb-4 text-sm italic">
      {date}
    </p>
    <p>
      {description}
    </p>
  </WCard>

export default BlogPreviewCard;