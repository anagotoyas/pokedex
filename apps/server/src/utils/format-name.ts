export const formatName = (name: string): string => {
  return name
    .split('-')
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    .join(' ');
};
