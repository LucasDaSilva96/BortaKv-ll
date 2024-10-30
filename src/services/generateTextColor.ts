export const generateTextColor = (index: number) => {
  const colors = [
    'text-orange-500',
    'text-slate-50',
    'text-yellow-500',
    'text-pnk-500',
    'text-blue-500',
    'text-slate-50',
    'text-green-500',
    'text-slate-50',
    'text-pink-500',
    'text-blue-500',
  ];
  const colorIndex = index % colors.length;
  return colors[colorIndex] || 'text-slate-50';
};
