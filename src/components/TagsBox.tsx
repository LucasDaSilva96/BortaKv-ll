import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import type { Tag } from '@/types/tags';
import { motion } from 'framer-motion';

type TagsBoxProps = {
  tags: Tag[];
};

export default function TagsBox({ tags }: TagsBoxProps) {
  return (
    <div className='w-full flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <motion.div key={tag.id} whileTap={{ scale: 0.9 }}>
          <Link to={`/tag/${tag.id}`}>
            <Badge className='bg-pink py-1.5'>{tag.name}</Badge>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
