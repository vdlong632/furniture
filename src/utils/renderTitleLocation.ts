export const renderTitle = (level: number) => {
  let info;
  switch (level) {
    case 1:
      info = {
        title: 'Main Location',
        textButton: 'Add Main Location',
        level: 1
      };
      break;
    case 2:
      info = {
        title: 'Sub Location 1',
        textButton: 'Add Sub Location 1',
        level: 2
      };
      break;
    case 3:
      info = {
        title: 'Sub Location 2',
        textButton: 'Add Sub Location 2',
        level: 3
      };
      break;
    case 4:
      info = {
        title: 'Vertical Level',
        textButton: 'Add Vertical Level',
        level: 4
      };
      break;
    case 5:
      info = {
        title: 'Room',
        textButton: 'Add Room',
        level: 5
      };
      break;
    default:
      info = {
        title: 'Main Location',
        textButton: 'Add Main Location',
        level: 1
      };
  }
  return info;
};
