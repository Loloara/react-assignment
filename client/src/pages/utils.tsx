export function getCategoryName(categoryNumber: number): string {
  switch (categoryNumber) {
    case 0:
      return '차량';
    case 1:
      return '인기매물'
    case 2:
      return '가구/인테리어'
    case 3:
      return '유야동/유아도서'
    case 4:
      return '생활/가공식품'
    default:
      return '';
  }
}