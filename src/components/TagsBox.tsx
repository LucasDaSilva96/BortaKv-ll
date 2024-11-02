import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import type { Tag } from '@/types/tags';

type TagsBoxProps = {
  tags: Tag[];
};

export default function TagsBox({ tags }: TagsBoxProps) {
  return (
    <div className='w-full flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <Link to={`/tag/${tag.id}`} key={tag.id}>
          <Badge className='bg-pink py-1.5'>{tag.name}</Badge>
        </Link>
      ))}
    </div>
  );
}
