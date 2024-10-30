import { queryClient } from '@/main';
import { useQueryClient } from '@tanstack/react-query';

export const useClient = () => {
  return useQueryClient(queryClient);
};
