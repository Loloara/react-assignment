export function getCategoryName(categoryNumber: number): string {
  switch (categoryNumber) {
    case 0:
      return '차량';
    default:
      return '';
  }
}